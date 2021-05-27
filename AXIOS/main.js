
/* const app = new Vue ({
    el: "#root",
    data:{
        response = ''
    },
    methods:{

    },
    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/name")
        .then(response =>{
            console.log(response.data.response);
            this.response = response.data.response;
        })
        .catch(error =>{
            console.error(error);
        })
        .then(() =>{
            console.log('I run anyway no matter what!');
        })

        ///metodo vecchio
        const xhttp = new XMLHttpRequest();
        console.log(xhttp);
        xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                const response = JSON.parse(this.responseText);
                console.log(response);
            }
        }
        xhttp.open('GET', 'https://flynn.boolean.careers/exercises/api/random/name', true);
        xhttp.send();
    }
})
 */