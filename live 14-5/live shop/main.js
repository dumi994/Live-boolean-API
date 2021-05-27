/* 
MILESTONE 1
creare un negozio online che mostri prodotti di personal pc 
ciascun prodoto deve avere: 
-nome
-descrizione
-prezzo
-image
-categoria
*/
/** 
 * Product class
*/

class Product {
    /**
     * @param {string} nome - nome del prodotto
     * @param {string} descrription - descrizione del prodotto
     * @param {number} price - prezzo del prodotto
     * @param {string} image_path - immagine del prodotto 
     * @param {string} category - categoria del prodotto
     */
    constructor(nome, descrription, price, category, image_path){
        this.nome = nome;
        this.description = descrription;
        this.price = price;
        this.category = category;
 /*    new Product('1tb ssd crucial', 'super fast ssd disk', 39.99, '', 'pc hardware'),
    this.image_path = image_path; */
    }
}

const products = [
    new Product('1tb ssd crucial', 'super fast ssd disk', 49.99, '','./img/ssd.jpg', 'pc hardware' ),
    new Product('apc 24inc monitor', 'super fast ssd disk', 159.99, '','./img/monitor.jpg', 'pc hardware',),
    new Product('Desktop', 'super fast ssd disk', 99.99, '','./img/desk.jpg', 'pc hardware',),
    new Product('Laptop', 'super fast ssd disk', 39.99, '','./img/laptop.jpg', 'pc hardware', ),
    new Product('Mouse ferro da stiro', 'super fast ssd disk', 199.99, '','./img/mouse.jpg', 'pc hardware', ),
    new Product('Case', 'super fast ssd disk', 139.99, '','./img/case.jpg', 'pc hardware', ),
    
]
console.log(products);
products.forEach(product =>{
    console.log(product);
    const {nome, description, price, image_path, category} = product;
    const markup = `
    <div class="product">
        <img src="${image_path}" alt="">
        <h4>${nome}</h4>
        <p>${description}</p>
        <hr>
        <br>
        <span>$ ${price}</span>
        <span>${category}</span>
        <button class="button buy_now" data-product-title="${nome}">Buy Now</button>
    </div>`
    document.getElementById('products').insertAdjacentHTML('beforeend', markup)
})

function printProduct (list, element){
    list.products.forEach(product =>{
        console.log(product);
        const {nome, description, price, image_path, category} = product;
        const markup = `
        <div class="product">
            <img src="${image_path}" alt="">
            <h4>${nome}</h4>
            <p>${description}</p>
            <hr>
            <span>$ ${price}</span>
            <span>${category}</span>
            <button class="button buy_now" data-product-title="${nome}" data-product-price="${price}>Buy Now</button>
        </div>`
        DomEL.getElementById('products').insertAdjacentHTML('beforeend', markup)
    })
};

let cart = [];
const buttons = document.querySelectorAll('.buy_now');
console.log(buttons);
buttons.forEach( button => {
    button.addEventListener('click', function (){
        console.log(this.getAttribute('data-product-name'), this.getAttribute('data-product-price'));
     /*    const name = this.getAttribute('data-product-name'),
        const price = this.getAttribute('data-product-price'),
        const purchasedIted = {name, price}
        console.log(purchasedIted); */

        document.querySelector(".cart_wrapp").insertAdjacentHTML('beforeend', `<div>${nome} ${prezzo}`)
    })
});