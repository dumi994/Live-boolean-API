//chiedi all utente i nomi di 2 persone e 
/* var age_1 = parseInt(prompt('Età player uno'));

var age_2 = parseInt(prompt('Età player due'));

var message = document.getElementById = ('msg') */
//comunicare quale utente dei due è piu grande

/* if (age_1 > age_2) {
    document.getElementById('msg').innerHTML = 'il giocatore 1 è più grande del gicoatore 2';
    console.log('Il giocatore uno è più grande del' + age_1);
}else if (age_2 > age_1){
    console.log('Il giocatore 2 è più grande');
}if(age_1 == age_2){
    document.getElementById('msg').innerHTML = 'il giocatore 2 è più grande del gicoatore 1';
    console.log('I giocatori hanno la stessa età');
}
 */



//quanto manca: utilizzando le funzioni dell'oggetto Date,

/* var oraAttuale = new Date();
var minAttuali = oraAttuale.getMinutes();
console.log('minutiAttuali');

var minOra = 60; */


// stabilire l'ora attuale e 


//attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.
       
/* var risultato = minAttuali - minOra;
console.log(risultato);

var message = "Allo scoccare dell'ora mancano " + risultato + ' minuti';

document.getElementById('msg').innerHTML = message; */



//pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.
var sceltaUtente = prompt('Pari o dispari?').toLowerCase();
console.log(sceltaUtente);

if (sceltaUtente != 'pari' && sceltaUtente != 'dispari') {
//////////////////////   alert('La tua scelta non è correta, scegli pari o dispari!')
}

// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.

var numeroUtente = parseInt(prompt( 'inserisci un numero da 1 a 9'));
console.log(numeroUtente);

if (numeroUtente < 1 || numeroUtente > 9 || isNaN(numeroUtente)){
    alert('Devi scegleire un numero compreso tra 1 e 9');
}

var numPc = Math.ceil(Math.random() * 9);
console.log(numPc);
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

var somma = numeroUtente + numPc;
console.log(somma);

var risultato;

if (somma % 2 == 0) {  //operatore modulo    var risultato = 'pari';
} else {
    risultato = "dispari";
}

console.log(risultato);

if (risultato == sceltaUtente) {
    console.log("Ha vinto l'utente")
    document.getElementById('msg').innerHTML = "Hai vinto"
} else {
    console.log('ha vinto il pc')
    document.getElementById('msg').innerHTML = "Hai perso"

}