let precioTotal = Number(0)
// constructor de objetos por clases //
class Producto{
    constructor(id, nombre, color, precio, algo)
    {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
    this.algo = algo;
    }
    }

const arrayproductos = [];
// constructor de objetos a traves del metodo push del array //
arrayproductos.push(new Producto(1,'YODA', 'Verde', 1500));
arrayproductos.push(new Producto(2,'TORRE EIFFEL', 'Gris', 2000));
arrayproductos.push(new Producto(3,'ARTURITO', 'Verde', 1500));
arrayproductos.push(new Producto(4,'CHUBACA', 'Azul', 400)),
arrayproductos.push(new Producto(5, 'DARTH VADER', 'Negro', 1000));
arrayproductos.push(new Producto(6, 'LLAVERO STAR WARS', 'Negro y rojo', 500));
arrayproductos.push(new Producto(7,'TRIPIO', 'Blanco y celeste', 1000))

// plantilla html, cargamos el div padre que contiene todo para luego subir el nuevo html de cada uno de los elementos que estan en el array a traves de un for // 
// paso 1 //
let energy = document.getElementsByClassName("father-flex");
for(const producto of arrayproductos)
{
    energy[0].innerHTML += `<div class="Flex-flex">
    <img class="foto-clase" src="Imagenes/${producto.id}.jpg" alt="">
    <h4 class="nombreJuguete">${producto.nombre} </h4>
    <span> $${producto.precio} </span>
    <i class="bx bx-shopping-bag courtney"></i>
    </div>`
}
// paso 2 //
let ventana = document.getElementsByClassName("cartbox")
ventana[0].innerHTML = `<img class="cart-img" src="Imagenes/${arrayproductos[0].id}.jpg" alt="">
                        <div class="detail-box">
                        <div class="cartproducttitle">${arrayproductos[0].nombre} </div>
                        <div class="cartprice">${arrayproductos[0].precio} </div>
                        <input type="number" value="1" class="cartquantity">
                        </div> 
                        
                        <i class='bx bxs-trash-alt cart-remove' ></i>`
                        
                        
 let cartIcon = document.querySelector('#cart')     
 let cart = document.querySelector('.cartt')
 let closeCart = document.querySelector('#close-cart')

 // paso 1 toco el cart y me abre el cart con toda la informacion //
 cartIcon.onclick = ()=>{
    cart.classList.add("active");
};
// paso dos toco la cruz y me cierra el cart //
closeCart.onclick = ()=>{
    cart.classList.remove("active");
    
};

// paso 3 si toco el simbolito del cart pegado a la foto me agrega a la ventana el respectivo simbolito que toque con toda la informacion// 
let ahora = document.querySelector(".courtney")
ahora.onclick = ()=>
{
    alert("hola");
};
    

// paso 4 cantidad * precio = total // 


// paso 5  boton enviar a mail o donde sea  // 










































// aca comienza el problema y ricorda que modificaste el right de .cartt (en css) a -100%. Antes estaba en 0 //


/* 
if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
    else {
    ready();
}
}
*/
/*

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for(var i = 0; i<removeCartButtons.length; i++)
    {
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)

    }
 }

 function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}
*/
