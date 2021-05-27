//deve consentire all'utente di scegliere un panino  e gli ingredienti



//creare lista di ingredienti e assegnare il prezzo a ciascuna
function renderInputs (list, el){
    counter = 0;
    while(counter < list.length){
        document.querySelector(el)
        .insertAdjiacentHTML('afterbegin',
        `<div class="form-group">
            <label for="${list[counter][0]}">${[list[counter][0]}</label>
            <input type="checkbox" name="cheese">
        </div>` 
         )


    counter++    
    }

    
}
var ingredienti = [
    ['cheese', '1'],
    ['Eggs'. '2'],
    ['mustard', '0,5'],
    ['tomato', '1'],
    ['lettuce', '1'],
    ['ketchup', '0.5']

]

renderInputs(ingredients, document.querySelector('.ingredients'));
document.querySelector('button').addEventListener('click', function() {
    //definisci prezzo base per il panino
    var burger_price = 10.99;
    console.log(burger_price);
    var checks = document.querySelectorAll("input[type ='checkbox']");
    //Definire il codice sconto e calcoalre il prezzo finale
    
    var sumIngredients = null;
    for (var i=0; i < checks.length; i++){
        var element = checked[i];
        if (element.checked){
            sumIngredients += Number(element.getAttribute('data-price'))
        };
    };
    console.log(sumIngredients);
    var totalPrice = burger_price + sumIngredients;
    console.log(totalPrice);

    var couponEl = document.getElementById('discount');
    var couponList = {
    'abc1234',
    'cde1234',
    'fgh1234',
    }
    /* var disc;
    for (var i = 0; i < couponList.length; i++){
        var ele = couponList;
        if(ele.includes('bcd1234')){
            disc = ele[1];
        }

    }
    console.log(totalPice, disc, totalPrice - disc) */


    if(cuopouEl.value !== ''){
        
        if (couponéList.includes(couponEl.value)){
            console.log('applica lo sconto')
            totalPrice += totalPrice + 0.5
        }
    }
    function applyDiscount (couponEl, couponList, totalPrice);
});



/**
 * apllica il codice sconto al prezzo
 * @param {object} El - tag html selezionato 
 * @param {array} List - lista dei codici sxconto da applicare
 * @param {number} Price - il prezzo sul quale applicare lo sconto
 */
function applyDiscount (El, List, Price){
    if(el.value !== ''){
         //verificare se il valore inserito è incluso tra i copupon
        if (ist.includes(el.value)){
            console.log('applicare lo sconto')
            price -= price * 0.1;
            console.log(price);
            return price;
        }
        //se incluso applica lo sconto
    }
    return price;
}
//incrementiamo il prezzo del panino quando un'ingrediente viene selezionato 
//ascoltiamo per il click sul pulsante 'generate'

