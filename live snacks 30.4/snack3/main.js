//crea due tag div con due id divers
// un div avra il testo colorato rosso mentre l'altro verde
// peartendo da un array di numero, stampiampo nell'id rosso i numeri dispari e in verde i pari



var numeri = []

for (var i = 0; i < 10; i++){
    numeri.push(i);
    if (numeri[i] % 2 == 0){
        document.getElementById('verde').innerHTML += numeri[i];
    } else {
        document.getElementById('rosso').innerHTML += numeri[i]

    }
}
console.log(numeri);