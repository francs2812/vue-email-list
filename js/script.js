// https://flynn.boolean.careers/exercises/api/random/mail

var app = new Vue (
    {
        el:"#root",
        data:{
            email: [],
        },
        mounted:function(){
            for (let index = 0; index < 10; index++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(
                     (response) => {
                        email = this.email
                        email1 = response.data.response
                        email.push(email1);
                        console.log(response.data.response);
                        console.log(this.email);
                            //console.log(this.email.0);
                }
                ); 
                
            }
            
        }
    });
