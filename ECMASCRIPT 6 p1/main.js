console.log(user);
var user = 'beatrice'; // Hoisted (variabile Sollevata)
console.log(user);


////////////////// constant variable ///////////////////////////////////////
/* console.log(age); */ //NOT HOISTED (non sollevata) ReferenceError: cannot access 'age' before initialization

//const age = 41; //variabile definita e non si può riassegnare il valore
//console.log(age);

/* age = "33"; //TypeError: Assignment to constant variable. (non si può modificare il valore di una variabile costante) */


const word = 'ciao';
//word = word.split(); // non si può sovrascrivere completametne la variabile
console.log(word);

const users = ['stefania', 'alessandra', 'anastasia', 'carmen', 'eveling'];
users.push('simone')
console.log(users);
//users = []; //TypeError: Assignment to constant variable

const userone = {
    'name': 'pippo',

}
userone.age = 20; //è possibile aggiungere una chiave/valore
console.log(userone);

//||||||||||||||||||||||||||||| LET ||||||||||||||||||||||||||||||| \\
console.log(user); //undefined
var user = 'beatrice'; // Hoisted (variabile Sollevata)
console.log(user);  //beatrice


//console.log(students); // Cannot access 'students' before initialization
let students = ['stefano', 'michele', 'alessandra', 'stefania'];
console.log(students);

//|||||||||||||||||||||||| BLOCK SCOPE |||||||||||||||||||||||||\\

for (let index= 0; index < 10; index++){
    console.log(index);
};
//if (index=== 10){
//   console.log(index); //ReferenceError: index is not defined perchè è stato dichiarato nel ciclo su 
//};

//|||||||||||||||||||||| DESTRUCTURING ||||||||||||||||||\\
/* const students1 = {
    nome: 'paolo',
    age: 30,
    email:'paolo@email.com'
};
const {nome, email} = students;
console.log(nome, email); */

const students2 =['paolo', 'mario', 'giggi'];
const [studentOne, studentTwo] = students; //che è studentOne?
console.log(studentOne, studentTwo);
