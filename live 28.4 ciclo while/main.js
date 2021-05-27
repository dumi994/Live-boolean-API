        //// trasformare for in while --->>

/* var array_numb = ['piero', 'carlo', 'genoveffa', 'claudia'];

for (var i = 0; i < array_numb.length; i++){
    console.log(array_numb[i]);
}
var i = 0;

while (i < array_numb.length ){
    console.log(array_numb[i]);
    i++
} */


    ////// ciclo while per creare un gioco 

/* var play = true;

while (play){
    var user_number = Number(prompt('inserisci un numero da 1 a 10'));
    var pc = Math.ceil(Math.random() * 10);

    if (user_number === pc){
        alert('riprova, nessun vincitore')
    }else if (user_number > pc){
        alert('hai vinto')
    }else {
        alert('hai pperso)')
    }

    play = confirm('vuoi continuare? premi ok per continuare o annulla per interrompere')
}

console.log('game over'); */


/* var names = ['luca', 'yoga', 'dardo']

for (var i = 0; i < names.length; i++){
    var username = names[i];
    console.log(username);
}

var index = 0;
while (index < names.length){
    var username = names[index];
    console.log(username);
    index++
}
 */


//Stampare tutti gli elementi di un array in pagina, all'interno di una lista.

var elements = ['latte', 'pane', 'uova', 'sale'];

for (var i = 0; i < elements.length; i++){
    var spesa = elements[i];
    var content = document.getElementById('compere').innerHTML;
    document.getElementById('compere').innerHTML = content + '<li>' + spesa + '</li>';
}