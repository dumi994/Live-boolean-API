//struttura di base per creare un oggetto

/* var persona =  {
    
    chiave: valore,   <-- proprietà dell'oggetto
    chiave: valore,
    chiave: valore,

    chiave: valor //metodo | funzione all'interno di un oggetto 
    
} */

//definire un oggetto

/* 

//PERSON OBJECT

var persona = {
    firstName: '',
    lastName: '',
    nationality: '',
    age: '',
    gender: '',
    religion: '';
    height: '';
    weight: '',
    eyeColor: '',
    fridends: [],
    dob: '',
    job: '',
    isMarried: true //false,

}
 

//CAR OBJECT

var car ={
    make = '',
    model = '',
    color = '',
    hp = '',
    price = '',
    fuelType = '',
    
}


//ARTICLE OBJECT

var post = {
    title: '',
    author: '',
    content: '',
    created_at: '',
    published_at: '',
    isPublic: true//false,

}


*/

/* var post = [
    {
    title: 'Learn JS',
    author: 'Fabio Pacifici',
    content: 'lorem ipsum dolor sit amet consecteur adepiscing elite.',
    created_at: '2021-05-10',
    published_at: '2021-05-11',
    isPublic: true//false,   
    },
    {
    title: 'Learn JS',
    author: 'Fabio Pacifici',
    content: 'lorem ipsum dolor sit amet consecteur adepiscing elite.',
    created_at: '2021-05-10',
    published_at: '2021-05-11',
    isPublic: true//false,   
    }
] */
//Accedere alla proprietà di un oggetto
// - 1. Dot notation
/* 
console.log(post.title, post.content);
// 2. Array notation
console.log(post['title'], post['content']);
console.log(post['Title'], post['content']); // questo title è undefinied perché js è case sensitive (riconosce min e maiusc).
 */


//ciclare in un oggetto con il for in

/* for (inizializzare variabile, parola chiave 'in' oggetto){
    blocco di codice 
}
 */

/* for (var key in post){
    console.log(post[key]);
}





var blogEl = document.getElementById('blog');

for (var i = 0; i < post.length; i++){
    var article = post[i];
    var markup = `
    <article class="${article.isPublic ? 'public' : ''}">
        <h2>${article.title}</h2>
        <h5>${article.author}</h5>
        <p>${article.content}</p>
        <hr>
        <div>${article.created_at} creazione | ${article.published_at} pubblicazione</div>
    </article>
    `;
    blogEl.insertAdjacentElement('beforeend', markup);
} */
/* 
var scooter = {
    make: 'piaggio',
    model: 'vespa',
    color: 'red',
    power: 'electric',
    price: '3000',
    startScooter: function(){
        this.isOn = true;
        return 'starting...',
        console.log(this);
    },
    stopScooter: function (){
        this.isOn = false;
        return 'disconnecting..'
    },
};

console.log(scooter);
console.log(scooter.startScooter());
console.log(scooter.stopScooter());
 */

var persona = {
    firstName: '',
    lastName: '',
    yob: 1980,
    /* calcAge: function (){
        this.age = new Date().getFullYear() - this.yob;
        //return this.age
    } */
    calcAge: function(yob){
        this.age = new Date().getFullYear() - yob

    }
}
console.log(persona.calcAge(persona.yob));
console.log(persona);
