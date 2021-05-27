/* var age = prompt('Quanti anni hai?');
console.log(age );

var currentYear = 2021;

var yearOfBirth = currentYear - age;
console.log('Il tuo anno di nascita è' + yearOfBirth);
document.getElementById('msg').innerHTML = "Il tuo anno di nascita è" + yearOfBirth;
 */

/* NOME */

/* 
var namee = prompt ("Qual'è il tuo nome?");
console.log('Ciao ' + namee);

document.getElementById('saluto').innerHTML = "Ciao" + ' ' + namee; */



// chiedere il nome all'utente
var username = prompt("Qual'è il tuo nome?");
console.log( username );
// chiedere all'utente il frutto preferito
var prefFruit = prompt ("Qual'è il tuo frutto preferito?");

// chiedere all'utente quanta frutta mangia quotidianamente
var fruitQuantity = prompt ("Quanta frutta mangi giornalmente?")

// mostra un messaggio di saluto
document.getElementById("saluto");
var elementoSaluto = document.getElementById("saluto");
elementoSaluto.innerHTML = "Ciao " + username;
//mostra un messaggio con il frutto preferito e quanto ne mangia
var frutta = document.getElementById('frutta');
frutta.innerHTML = "Il tuo frutto preferito è " + prefFruit + " e ne mangi " + fruitQuantity;