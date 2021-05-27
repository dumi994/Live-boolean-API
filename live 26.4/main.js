/* // chieder all'utente un numero
var numero_1 = Number(prompt('Inserisci un numero'));
console.log(numero_1);
//Inserisci un'altro numero
var numero_2 = Number(prompt('Inserisci un altro numero'))
console.log(numero_2);
// chiedi l'operazione da fare tra addizione sottrazione o moltiplicazioni o divisione
var operazione = prompt('inserisci il tipo di operazione da fare [addizione, sottrazione, moltiplicazione, divisone]')
console.log(operazione);


var risultato;
// aseconda della scelta

switch (operazione) {
    case 'addizione':
    risultato = numero_1 + numero_2;
    break;

    case 'sottrazione':
    risultato = numero_1 - numero_2;
    break;

    case 'moltiplicazione':
    risultato = numero_1 * numero_2;
    break;

    case 'divisione':
    risultato = numero_1 / numero_2;
    break;

    default:
        risultato = "Operazione sconosciuta";
}
console.log(operazione);
document.getElementById('titolo').innerHTML = operazione; */


/* 
//Chiedere un numero all'utente
var numero = Number(prompt('Inserisci un numero'));
//calcolare il numero successivo
var risultato = numero + 1; 
console.log('il numero originale è ' , numero);
console.log('Il nuovo numero è', risultato);

//Mostrare un messaggio con entrambi i numeri */


// esercizio

var users = ['anstasia', 'fabio', 'michele']

var number = Number(prompt("inserisci un numero da 0 a 2" + users.length - 1));
console.log(users[number]);

console.log(users.length);

