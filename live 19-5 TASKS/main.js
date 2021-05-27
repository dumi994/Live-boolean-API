/* Funzionalitá:


L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Inoltre L'utente vuole poter modificare una task giá inserita
ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera. Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
Da tenere a mente:
Ricordate di scrivere le istruzioni prima di iniziare a lavorare cercate di descrivere in modo sintetico gli step che pensate siano necessari. Consultate la documentazione e se siete bloccati, aprite un ticket.

 */



const app = new Vue ({

    el: '#root',
    data:{
        logo:'https://www.boolean.careers/images/misc/logo.png',

        //La nostra todo list avrá alcune tasks di default predefinite

        tasks : [
            'Learn HTML',
            'Learn CSS',
            'Learn JS',
        ]
    },
    methods : {
        //addTask
        addTask(){
            //pusha newTask in tasks
            this.tasks.push(this.newTask)
            this.newTask = "";
        },
        //rimuovi task
        removeTask(index){
            console.log('Remove task n.' + index);
            //usare splice
            this.tasks.splice(index, 1)
        }

    }
})