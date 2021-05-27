//crea un array vuoto  e chied all'utente un numero da inserire nell'array
//continua a chiedere numeri all'utente e a insierirli nell'arrray fino a quando la somma degli elementi è minore di 50
var array = [];
var somma = 0;


while (somma < 50){
    var numero_utente = Number(prompt('Inserisci un numero'));
    somma = somma + numero_utente;
    array.push(numero_utente);
    console.log(somma);
}
console.log(array);