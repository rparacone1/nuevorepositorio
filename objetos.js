alert('Productos en stock: Darth vader, llavero star wars, torre eiffel, yoda, avion, auto, camello, arbol')
function Producto(nombre, color, precio)
{
    this.nombre = nombre;
    this.color = color; 
    this.precio = precio;
}


const producto1 = new Producto (['DARTH VADER','DARTHH VADER', 'DAR VADER','DARS VADER'], 'Negro', 1000);
const producto2 = new Producto (['LLAVERO STAR WARS', 'llavero star wors', 'llavero de star wars', 'star wars llavero'], 'Negro y rojo', 500);
const producto3 = new Producto (['Torre Eiffel', 'torre eifel', 'torre ifel', 'torre eifel'], 'Gris', 2000);
const producto4 = new Producto ('YODA', 'Verde', 1500);
const producto5 = new Producto (['Auto','car'], 'Azul', 400);
const producto6 = new Producto (['Avion','abion','plane'], 'Blanco y celeste', 1000);
const producto7 = new Producto ('CAMELLO', 'Naranja', 4000);
const producto8 = new Producto (['Arbol','arrbol','arbol'], 'Verde', 5000);


let precioTotal = Number(0)

function gastototal()
{ 
    for(let i = 0; i<2; i++)
    {
    productos = prompt("Elija el producto que quiera y calcule su gasto").toUpperCase()  
        if (productos == (producto1.nombre[0])) 
    {
        precioTotal += (producto1.precio)
    
    }
        else if (productos == producto2.nombre[0])
    {
        precioTotal += (producto2.precio) 
    
    }
    else if (productos == producto3.nombre)
    {
        precioTotal += (producto3.precio) 
    }
        else if (productos == producto4.nombre)
    {
        precioTotal += (producto4.precio) 
    }
        else if (productos == producto5.nombre)
    {
        precioTotal += (producto5.precio) 
    }
        else if (productos == producto6.nombre)
    {
        precioTotal += (producto6.precio) 
    }
        else if (productos == producto7.nombre)
    {
        precioTotal += (producto7.precio) 
    }
        else if (productos == producto8.nombre)
    {
        precioTotal += (producto8.precio) 
    }
        else 
    {    
    productos = prompt("Elija el producto que quiera y calcule su gasto").toUpperCase()
    }
}
}
gastototal()
alert("El gasto total es de: $" + precioTotal)


