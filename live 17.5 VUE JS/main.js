//Predisponiamo due input, in cui inseriremo Nome e Cognome. In un paragrafo utilizzare Nome e Cognome per salutare l’utente


let app = new Vue (
    {
        el: '#root',
        data:{
            nome: "gigi",
            cognome: "",
            title:'learn Vue.js',
        },
        methods:{
        /*     //es5
            saluta: function{
                return 'hi'
            },
 */
            //es 6
            greetings(){
                alert(this.title)
            },
        }
    },
     
)


//direttive VUE
//V-MODEL (inputs)


//V-BIND (versione abbreviata ':' :class="classe") (crea legame tra attributo html e vue instance)

//V-ON (scatenare eventi)
//versione abbreviata@click="qualcosa da fare"