/* const luke = {
    'name': 'luke',
    age: 30,
    friends: ['leila', 'yan', 'solo']
}
const yoda = {
    'name': 'yoda',
    age: 30,
    friends: ['leila', 'yan', 'solo']

} */


const product = {
    nome: '',
    descrizione: '',
    prezzo: '',
    categoria: '',
    image: ''
}
console.log(product);

/* 
OOP - Programmazione ad oggetti 
- class declaration (non soggetta ad hoisting)
- class expression
 */



//CLASS DECLARATION
// - Non posso usare la classe prima della sua inizializzazione //reference error
class nomeDellaClasse {
    //il tuo codice 
}
// - Qui posso usare la classe perché è già stata dichiarata

//\\\\\\\\\ CLASS EXPRESSION ////////\\

// - Non posso usare la classe prima della sua inizializzazione //reference error
const NomeClasse = class {

}
// - Qui posso usare la classe perché è già stata dichiarata


// Definiamo classe prodotto

class Product {
    //you're code here..
    //name = ssd // condivisio per tutte le istanze
    /**
     * @param {string} name - nome del prodotto
     * @param {string} descrizione - descrizione del prodotto
     * @param {number} prezzo - prezzo del prodotto
     * @param {string} image - il percorso dell'immagine
     * @param {string } categoria - categoria del prodotto
     * @param {number} likes  - il numero di likes 
     */
    constructor(nome, descrizione, categoria, prezzo, image, likes = 0){
        this.nome = nome;
        this.descrizione = descrizione;
        this.prezzo = prezzo;
        this.categoria = categoria;
        this.image = image;
        this.likes = likes;
    }
    addLike(){
        return this.likes += 1;
    }

}
//creare un istanza della classe prodotto

const ssd = new Product('1tb ssd crucial', 'super fast ssd disk', 59.99, '', 'pc hardware');
console.log(ssd);

 /* CREARE ARRAY DI PRODOTTI */

const products = [
    new Product('1tb ssd crucial', 'super fast ssd disk', 59.99, '', 'pc hardware'),
    new Product('1tb ssd crucial', 'super fast ssd disk', 59.99, '', 'pc hardware'),
    new Product('1tb ssd crucial', 'super fast ssd disk', 59.99, '', 'pc hardware'),
    new Product('1tb ssd crucial', 'super fast ssd disk', 59.99, '', 'pc hardware'),
]
console.log(products);


/* 
//\\ MODULI //\\
- export (esporto funzionalita da un file js)
- import (le importo nel mio file.js)

 */


/* 
EXPORT
-named export (zero o molte fuzionalità)
-default export ( una votla per modulo)
*/

/* 
SINTASSI NAMED EXPORT
*/

//Funzionalità individuali

export let age, name, lastname;
export const admin ='fabio', users = ['']
export function calcAge(){
    //blocco di codice 
};

//Lista di funzionalità (mettere alla fine del file)
export {age, admin, calcAge}

//Rinominare gli export
export {age as userAge, calcAge as AgeCalculation}


//SINTASSI DEFAULT EXPORT
export {Product as default}
//oppure
export default function calcAge (){
    //youre code here
}

//Oppure
export default class Product {
    //blocco di codice
}



//||||||||||| IMPORT |||||||||||\\
import {qualcosa('una delle proprietà che abbiamo esportato')} from 'qualcheparte'('dove abbiamo salvato i file js')