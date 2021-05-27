// fai inserire un numer che chiameremo N, all'utente;
// genera N array, ognuno formato da 10 numeri casuali tra 1 e 100
// ogni volta che ne crei uno, stampalo sullo schermo
var numeroUtente = Number(prompt('Inserisci un numero'));

function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
    console.log('i:' + ' ' + i);
}

for (var i = 1; i <= numeroUtente; i++){
    var array_utente = [];
    for (var j=0; j <= 9; j++){
    console.log('i:' + ' ' + i);
       array_utente.push( getRandomNumber(1, 100));
       console.log(array_utente);
    }
}