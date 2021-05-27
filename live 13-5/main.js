/* 
*Milestone 1*
Definire un array di oggetti; ogni oggetto rappresenta un gatto, 
che è caratterizzato da: nome, età, colore e sesso.
Tramite la funzione .forEach(), stampare in pagina tutti i gattini, 
ciascuno con il proprio colore e il proprio nome.
*/
const gatti = [
    {nome:"Garfield" , eta: 12 , sex:'maschio', colore: "orange"},
    {nome:"Grigia" , eta:12 , sex: "femmina" , colore: "grey" },
    {nome:"Palla di neve" , eta: 7 , sex: "maschio", colore: "black" },
    {nome:"Grattachecca" , eta: 12 , sex: "maschio" , colore: "blue" },
    {nome: "Silvestro", eta: 5 , sex:'maschio', colore: "black "},
    {nome: "Tom", eta: 5 , sex:'maschio', colore: "grey"},
    {nome: "Nerona", eta: 9 , sex:'femmina', colore: "white"},
    {nome: "Azzurra", eta: 5 , sex:'femmina', colore: "blue"},
];




/*
*Milestone 2*
Dividere i gatti in due contenitori distinti in base al sesso 
e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, 
se femmina, o di blu, se maschio. 
Il colore del fiocco deve essere più tenue se il gatto è più giovane, 
più scuro se il gatto è più vecchio.
*/

            //FILTER\\

/* const gattiMaschi = gatti.filter((gatto) => {
    return gatto.sex === 'maschio';
});
console.log(gattiMaschi);
const gattiFemmina = gatti.filter((gatto) => {
    return gatto.sex === 'femmina';
});
console.log(gattiFemmina); */


        //FOR EACCH\\



let gattiMaschi = [], gattiFemmina = [] ;
gatti.forEach((gatto) => { 
    gatto.fiocco = "fas fa-ribbon"
     if (gatto.sex === 'maschio'){ 
         gatto.coloreFiocco = 'blue';
         gattiMaschi.push(gatto) 
    }else{ 
         gatto.coloreFiocco = 'hotpink';
         gattiFemmina.push(gatto) 

    } 
}) 
console.log(gattiMaschi, gattiFemmina);


gatti.forEach(gatto =>{
    if(gatto.eta < 5){
        
    }
})



gatti.forEach((gatto) => {
    console.log(gatto.nome, gatto.colore);
    document.getElementById('container').insertAdjacentHTML('beforeend', `
    <div class="gatto">
        <i class="${gatto.fiocco}" style="color: ${gatto.coloreFiocco}; filter: opacity (${gatto.eta * 5}%"></i>
        <i class="fas fa-cat" style="color: ${gatto.colore}"></i>
        <h4>${gatto.nome}</h4>
    </div>`)

});
 
/*
*Milestone 3*
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
inserendo solamente 
- nome e colore gatto 
- colore e opacità del fiocco
*/

