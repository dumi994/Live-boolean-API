console.log(post); //undefined
var post = "Learn JS"; // Var soggetta ad hoisting
console.log(post);




//console.log(product); //Cannot access 'product' before initialization

let product = "1tb crucial ssd"; // let non soggetta ad hoisting
console.log(product);//1tb crucial ssd

//console.log(book); // Cannot access 'book' before initialization

const book = 'Eloquent JS'; //CONST NON soggetta ad hoisting
console.log(book);

//Assignment errore (const only);
var user = "luke";
user = "Yodio";
console.log(user);

let person = "mario";
person = "dario";
console.log(person);

const newPost = "Learn HTML";
//newPost = "Learn CSS"; //Uncaught TypeError: Assignment to constant variable.


const books =['learn js', 'learn html', 'learn css']
for (let i = 0; i < books.length; i++){
    const element = books[i]
}
console.log(books);


/* \\\\\\ BLOCK SCOPE \\\\\*/






var age = 12; // global scope

function calcAge(yob){
    var currentYear = new Date().getFullYear();// FUNCTION SCOPE
    var age = currentYear - yob; //FUNCTION SCOPE
    return age;
};
//console.log(age); //12, perché è definita fuori dalla function

//console.log(currentYear); //Uncaught ReferenceError: currentYear is not defined | perché è bloccata nella funzione


//\\\\BLOCK SCOPE IF BLOCK  (solo let e const) \\\\\\\\//





const x = 10;
const y = 20;

// y > x | true
if (y > x){
    //block scope
    var message = 'y è maggiore di x'; // VAR non rientra nel block scope
    let risultato = `${y} è maggiore di ${x}` //let rientra nel block scope
    const alertMe = 'sono dentro un block scope'//const rientra nel block scope
}
console.log(message); //IL messaggio viene letto perché var non rientra nel blockscope
//console.log(risultato); //Uncaught ReferenceError: risultato is not defined - non viene letto
// console.log(alertMe); //Uncaught ReferenceError: alertMe is not defined - non viene letto


//||||||||| BLOCK SCOPE FOR LOOP ||||||||||||\\






const movies = ['avengers', 'back to the future', 'thor', 'star wars']
for (let i = 0; i < movies.length; i++){
    const movie = movies[i];
    console.log(movie);
}
//console.log(movie); // Uncaught ReferenceError: movie is not defined

const arrNumbers = [1, 4, 6, 7, 7]

function getSum(listNumbers){
    let sum = 0; // LOCAL or FUNCTION SCOPE;
    for (let i = 0; i < listNumbers.length; i++){
        const numb = listNumbers[i]
        console.log(sum, numb);
        sum += numb;
    }  
}
//console.log(numb); //Uncaught ReferenceError: numb is not defined
//console.log(sum); //Uncaught ReferenceError: sum is not defined
getSum (arrNumbers) 


//\\\\\\\\ TEMPLATE LITERALS ////////////\\








/* const libro = 'eloquent js'
const price = 12.99;
let messagge = "a book to read" + ' ' + libro + ' price' + price;
console.log(message);
messagge = `
a book to read ${libro} price: ${price}
`;
console.log(messagge);
 */
///////////////////////////////////////////////////////////

/* var brand = 'Cannondale';
var frameSize = 19;
var color = "red"; */

// ES 5
/* const bicycle = {
    brand: brand,
    frameSize: FrameSize,
    color: color
} */

// ES 6
/* const bicycle = {
    brand,
    frameSize,
    color
}
console.log(bicycle); */


//\\\\\\\\\DESTRUCTURING DI OGGETTI E ARRAY \\\\\\\\\\\//
// ARRAY





/* const bicycle = [
    {
    brand: "cannondale",
    frameSize: 19,
    color: "red"
    },
    {
    brand: "cannondale",
    frameSize: 19,
    color: "black"
    },
    {
    brand: "cannondale",
    frameSize: 19,
    color: "blue"
    },
] */


//ES5


/* var redBike = bicycle[0];
var blackBike = bicycle[1];
var blueBike = bicycle[2]; */

/* const [redBike, , blackBike] = bicycle;
console.log(redBike, blackBike);
 */




//OBJECTS








const blackBike = {
    brand: "cannondale",
    frameSize: 19,
    color: "red"
}

const {brand, frameSize, color} = blackBike;
console.log(brand);
//console.log(brand, size, color); // size is not defined



//\\\\\\\\\\\\\\\\\\ ARROW FUNCTON //////////////\\
/* 






arrow function molto simile a funzione anonima
sintassi:

() => {}

- () - obbligatorie solo se non ci sono parametri o ce ne sta piu di uno
- => - 
- {} - obbligatorie se il codice è su più righe e quindi obbligatorio anche il return
- returno - opzionale se il codice è su una riga
 */

//SENZA PARAMETRI


/* const calcAge2 = () => {
    //blocco di codice
}
 */

// CON 1 PARAMETRO


/* const calcAge2 = dateOfBirth => {
    //blocco di codice
} */

//CON 2 O PIU' PARAMETRI


/* const calcAge2 = (dateOfBirth, currentYear) => {
    //blocco di codice
}
 */


// SENZA PARAMETRI, {} E RETURN


/* const calcAge2 = () => new Date().getFullYear() - 1980;
console.log(calcAge2()); */


// CON 1 PARAM, SENZA {} E SENZA RETURNB


/* const calcAge2 = dob => new Date().getFullYear() - dob;
console.log(calcAge2(1980));
 */


//CON PIU PARAM, SENZA {} E SENZA RETURN


/* const calcAge2 = (dob, currentYear) => currentYear - dob;
console.log(calcAge2(1980, new Date().getFullYear())); */

//MULTILINEE CON {} E RETURN 




/* const calcAge3 = (dob, currentYear) => {
    const eta = currentYear - dob;
    return 'your age is: ' + eta;
}
console.log(calcAge3(1980, 2021));
 */


//\\\\\\\\\\\ L'UTILIZZO DI THIS //////////\\
//ARROW FUNCTION NON HA IL PROPRIO THIS MA EREDITA QUELLO DELLO SCOPE DEL GENITORE







/* document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', function (){
        console.log(this);                                  //RITORNERA IL BOTTONE CHE è STATO CLICCATO
    })
})


document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', () => {               //RITORNERA WINDOW (FINESTRA DEL BROWSER)
        console.log(this);
    })
}) */

//\\\\\\\\\\\\\\REST E SPREAD//////////////\\





const films = ['avengers', "star wars", "jurassik park"];
const series = ['grimm', 'mentalist', 'elementary', 'lucifer'];


//ES6
const filmSeries = [...movies, ...series];
console.log(filmSeries);


//\\\\\\\\ OPERATORE SPREAD CON GLI OGGETTI ///////\\





const Film = {
    title: 'star wars',
    genere: 'fantasy',
}

const StarWars = { ...Film, length:120, actors: []} 
console.log(StarWars);


//\\\\\\\\\\\\\\\ SPREAD E REST PARAMETRI ////////////////\\






function sumNumbers (...numbers){
    console.log(numbers); //[1, 5, 6, 10, 12]
}
sumNumbers(1, 5, 6, 10, 12)

//|||!|!|!|!|!|!|!|!|! FOR EACH |!|!|!|!|!|!|!\\







const bici = [
    {
        nome:'MTB Conor',
        peso: 6,
    },
    {
        nome: 'ELOPS 520',
        peso: 7.5,
    },
    {
        nome: 'DURANGO',
        peso: 6,
    },
    {
        nome:'BTWIN' ,
        peso: 11,
    },
    {
        nome:"VIVOBIKE" ,
        peso: 10,
    },
    {
        nome: 'SMOBY',
        peso: 1.5,
    },

];

//arrow function foreach



bici.forEach( (bicicletta, i, listaBici) => {
    /* console.log(listaBici.length);
    console.log(bicicletta, i); */
    console.log(bicicletta.nome, bicicletta.peso);
    console.log(`la ${bicicletta.nome} pesa ${bicicletta.peso} kg`);
});


//ANONIMOUS FUNCTION



bici.forEach(function (element, index, bicycle){

});


//|!|!|!|!|!|!! MAP & FILTER !|!|!|!|!|!|! \\





/* const array = [];
array.map(funzioneDiCallBack(elementoArray){
    //codice
    return 'qualcosa'
}) */


                //MAP\\


/* const numeri = [1, 2, 3, 4, 5]
const quadrati = numeri.map((numero) => {
    return numero * numero;
    
});
console.log(quadrati); //[1, 4, 9, 16, 25] */

// 1* iterazione | 1 x 1 = 1;
// 2* iterazione | 2 x 2 = 4;
// 3* iterazione | 3 x 3 = 9;
// 4* iterazione | 4 x 4 = 16;
// 5* iterazione | 5 x 5 = 25;
 

                //FILTER\\
//va dichiarato o vero o falso  



const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter((numero) => {
    if (numero % 2 === 0){
        return true;
    }
    return false;
});
// 1* iterazione | (1 % 2 === 0) ? false ignora e vai avanti alla prossima iterazione;
// 2* iterazione | (2 % 2 === 0) ? return true -> inserisci nel nuovo array pari;
// 3* iterazione | (3 % 2 === 0) ?= return false - ignora e procedi con la prossima iterazione
// 4* iterazione | (4 % 2 === 0) ? true -> inseriscilo nel nuovo array pari
// 5* iterazione | (5 % 2 === 0) ?= return false - ignora e procedi con la prossima iterazione
// nessuna nuova iterazione, array numeri finita -> pari = [2, 4]
console.log(pari); // [2, 4]
