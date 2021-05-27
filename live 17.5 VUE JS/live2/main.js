
//Creiamo una pagina con all’interno un titolo di colore rosso. Al click di un bottone il titolo diventerà blu.

let app = new Vue (
    {
        el: '#app',
        data:{
           colorClass: 'red',
        },

        methods:{
            changeColor(){
                if (this.colorClass === 'red'){
                    this.colorClass = 'blue';
                }else {
                    this.colorClass = 'red';
                }
                    
            }
        }
        
    },
     
)
