/* // al click di un pulsante dev apparire un alert con un numero random

var pulsante = document.querySelector('button');

console.log(pulsante);


pulsante.addEventListener('click', function(){
    alert(Math.floor(Math.random() +10));
}); */

//il software deve chiedere all'utente il suo nome e il sesso con due prompt diversi
var nome = prompt('come ti chiami?');
var sesso = prompt('nserisci il tuo sesso (M, F, X)');

//sulla prima pagina html deve apparire ciao <nome>, il colore del nome deve essere azurro o rosa a seconda del sesso inserito

var nomeUtenteElem = document.querySelector('#welcome > span');
console.log(nomeUtenteElem);
nomeUtenteElem.innerHTML = nome;

if (sesso === 'm'){
    nomeUtenteElem.style.color = 'blue';
}else (sesso === 'f'){
    nomeUtenteElem.style.color = 'pink';

}else if (sesso === 'x'){
    nomeUtenteElem.style.color = 'red';
}else {
    alert ('inserisci un dato corretto');

}