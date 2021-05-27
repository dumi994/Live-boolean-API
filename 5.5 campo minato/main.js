//-- il computer deve generare 16 numeri casuali tra 1 e 100
//-- i numeri non possono essere duplicati
// in seguito deve chiedere all utente (100-16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.


// al termini dellea partita il software deve comuinicare il punteggio cioè il numero di volte che l'utente ha inserito un nr consentito


// bonus (da fare solo se funziona il resto)
//all inizio il software chiede anche una difficoilta all utetne che cambia il range diu numeri casuali
// ddifficolta 0 -> tra 1 e 100
// difficolta 1 -> tra 1 e 80
// difficolta 2 -> tra 1 e 50


/* 
Il computer deve generare 16 numeri casuali tra 1 e 100
-  una funzione per generare numeri casuali
-  uso includes per verificare se il numero casuale esiste già
-  un array dove inserire i numeri generati 
 */
var bombe = [];
function randomNumbers (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/* console.log(randomNumbers(1, 100));

for (var i = 0; i < 16; i++) {
    var numero = randomNumbers(1, 100);
    if(!bombe.includes(numero)){
        bombe.push(numero);
    }
} */
while (bombe.length < 16){
    var numero = randomNumbers(1, 100);
    if(!bombe.includes(numero)){
        bombe.push(numero);
    }
}

var livello = prompt('Scegli un livello di difficoltà! [0/1/2]');
/* var numero = randomNumbers(1, 100); */


switch (livello){
    case 1:
        //80 numeri
    var numero = randomNumbers(1, 80);
    limit = 80;

        break;
    case 2:
        //50 numeri
    var numero = randomNumbers(1, 50);
    limit = 50;
        break;
    default:
        //100 numeri
    var numero = randomNumbers(1, 100);
    limit = 100;
        break;


}


console.log(bombe);

// in seguito deve chiedere all utente (100-16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//l'utente non può inserire lo stesso numero piu volte
// se il numero è presente nella lista dei numeri generati, la partite termina, altrimenti si continua chiuedendo all'utente un altro numero.
// la partita termina quando il giocatroe inserisce un numero vietato o raggiunge il nr masssimo possibile di numeri consentiti

/* 
    - ciclo for
    - array di numeri inseriti dall'utente
    - controllo dei numeri inseriti

 */

var arrayUtente = [];
for (var i=1; i <= (limit - 16); i++){
    var numeroUtente = Number(prompt('inserisci un numero compreso tra 1 e' + limit));
    while (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente)){
        alert ('devi inserire un numero tra 1 e ' + limit);
        numeroUtente = parseInt(prompt('inserisci un numero tra 1 e' + limit));
    }
    if (!arrayUtente.includes(numeroUtente)){
        if(bombe.includes(numeroUtente)){
            alert ('che sfiga, sei saltato per aria, hai fatto ' + arrayUtente.length + ' punti')
            break;
        } 
        arrayUtente.push(numeroUtente);
        console.log(arrayUtente);
    }else {
        alert ('Hai già inserito questo numero' + arrayUtente);
        i--;
    }
    console.log([i]);
}
//al termine della partia il software deve comunicare il punteggio, cioe il nr di volte che l'utete ha inserito un numero consentito

if (arrayUtente.length === 84){
    alert ('hai vinto, punti totali' + arrayUtente.length)
}



