// dare la possibiita i inserire due parole
// verificare tramite una funzione che le due parole abbiano la stessa lunghezza
//se hanno la stessa lunghezza stamparle entrambe altrimenti stampare la piu lunga delle due

var parola_1 = prompt('dammi una parola');
var parola_2 = prompt('dammi un\'altra parola');

function lunghezza (word_1, word_2){
    
    if (word_1.length == word_2.length){
        console.log(word_1 + ' e ' + word_2 + ' sono parole di lunghezza uguale');
    }else if (word_1.length > word_2.length){
        console.log('la parola ' + word_1 + ' è più lunga');
    }else{
        console.log('la parola ' + word_2 + ' è più lunga');
    }
}

lunghezza (parola_1, parola_2)