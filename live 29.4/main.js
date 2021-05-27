/* var frasiFortunate = [
    'Buona fortuna',
    'in bocca al lupo',
    'che la forza sia con te',
    'ngul a mammt'
]

function frasi_fortunate(listaFrasi){
    return listaFrasi[Math.floor(Math.random() * listaFrasi.length)];
}

console.log(frasi_fortunate(frasiFortunate)); */


// numeri random

/* function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomInteger(10, 45)); */

// verifica se numero utente è pari o dispari


//1 modo

/* var userNumber = Number(prompt('inserisci un nr'));

if (userNumber % 2 === 0){
    console.log('pari');
}else{
    console.log('dispari');
}
 */


// 2 modo

/* function isEven (number) {
    if (number % 2 === 0){
        console.log('pari');
        return true;
    }
    console.log('dispari');
    return false;
       
}
console.log(isEven(12));
console.log(isEven(121));
console.log(isEven(21));
console.log(isEven(9)); */

// 3 MODO

/* var isEven = true;
var userNumber = Number(prompt('inserisci un nr'));

if (isEven(userNumber)){
    console.log('pari', userNumber);
}else{
    console.log('dispari', userNumber);
} */

//4 MODO

/* function pari_dispari(numero){
    if (numero % 2 === 0){
        return 'pari';
    }
    return 'dispari';
}

var numeroUtente = Number(prompt('inserisci un numero'));
if(pari_dispari(numeroUtente) === 'pari'){
    console.log('il numero è pari', numeroUtente);
}else{
    console.log('il numero è dispari', numeroUtente);

}
 */

