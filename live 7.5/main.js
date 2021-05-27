/* //stringa

var username = 'mario';
var age = 48;
var list = ['mele', 'pere', 'arance'];

//array multidimensionale

var users = [
    ['mario', 48],
    ['luigi', 48],
    ['luca', 48],

];
console.log(users);

//accedere tramite un'indice
users [2][1];

//object
var mario = {
    'name' : 'mario',
    lastName: 'Bross',
    job : 'idraulico',
    age : 2021 - 1988,
}
console.log(mario);

var luigi = {
    'name' : 'Luigi',
    lastName: 'Bross',
    job : 'idraulico',
    age : 2021 - 1982,
}
console.log(luigi);


//accedi ad un elemento con la dot notation


console.log(mario.name);
console.log(mario.cibiPreferiti);
//accedere utilizzando la sintassi delle array
console.log(mario['lastName']);



//Modifica e aggiungi proprieta ad un oggetto
mario.age = 50; // modifica
mario['age'] = 60; //modifica
console.log(mario);

//aggiun gi proprieta all'oggetto
mario.figli = ['luca', 'stefano'];
mario['animali'] = ['cani', 'ratti'];
console.log(mario); 



var nameKey = 'name';
/* console.log(mario.last+nameKey); */

/* var userName = 'lastName';
console.log(mario['lastName']); */ 

/////////////////////////////////////////
/* var surname = 'last ' + 'name';
console.log(surname);//last name

console.log(mario[username]);//undefined

console.log('questo è il cognome di mario ' + mario.lastName); */



// KEY

/* var mario = {
    'name' : 'mario',
    lastName: 'Bross',
    job : 'idraulico',
    age : 2021 - 1988,
}
for (var key in mario){
    console.log(mario[key]);
}
 */

/* 
//pallina da golf
var palla = {
    colore: ['rossa', 'verde'],
    tipo:'golf',
    diametro: 15,
}

//modifica diametro pallina da golf
palla.diametro = 20;
console.log(palla.diametro);
palla['diametro']= 50;
console.log(palla.diametro);


//inserisci il prezzo nell'array
palla.prezzo = 20;
console.log(palla);

//modifica il prezzo della palla
palla["prezzo"] = 35;
console.log(palla.prezzo);


//cicla dentro l'intero oggetto e dammi la chiave e il valore
for (var chiave in palla){
    palla[chiave];
    console.log(chiave);
    console.log(palla[chiave]);
}
 */


//live 2

var classi = [
    {
        numeroClasse:35,
        numeroStudenti: 37,
    },
    {
        numeroClasse:36,
        numeroStudenti: 45,
    },
    {
        numeroClasse: 37,
        numeroStudenti: 20,
    },
]
console.log(classi);
var nuovaClasse = {
    numeroClasse: 38,
    numeroStudenti: 35,
}
classi.push(nuovaClasse);
console.log(classi);

for (var i=0; i < classi.length; i++){
    var classe = classe[i]
    
    for (var chiave in classe){
        HTMLTableSectionElement.insertAdjacentHTML('beforeend', `
        <p> ${chiave}</p>`)
    }
}