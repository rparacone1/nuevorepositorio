
/*

Javascript 
segunda
entrega

*/



function Producto(nombre, color, precio)
    {
        this.nombre = nombre;
        this.color = color; 
        this.precio = precio;
    }

const producto1 = new Producto ('DARTH VADER', 'Negro', Number(1000))
const producto2 = new Producto ('LLAVERO STAR WARS', 'Negro y rojo', Number(500))
const producto3 = new Producto ('TORRE EIFFEL', 'Gris', Number(2000))

// Calculo de gastos totales a pagar //
function precioapagar()
{ 
let precioDarthVader = Number("1000")
let precioEiffel = Number("2000")
let PrecioLlavero = Number("500")
let precioTotal = Number("0")
let PrecioTotal2 = Number("0")
let precioTota3 = Number("0")
for (let a=0; a<3; a++) 
{
    productos = prompt("Elija el producto que quiera").toUpperCase()
    if (productos == producto1.nombre)
    {
        precioTotal += (precioDarthVader) 
    
    }
        else if (productos == producto2.nombre)
    {
        PrecioTotal2 += (precioEiffel) 
    
    }
        else if (nombre == producto3.nombre)
    {
        precioTota3 += (PrecioLlavero) 
    }

}
let suma = (precioTotal+ PrecioTotal2 + precioTota3)
console.log(precioTotal+ PrecioTotal2 + precioTota3) 
console.log(suma)
alert("El gasto total es de: $" + suma)
}

precioapagar()






todosLosproductos = producto1, producto2, producto3
for(let i = 0; i<5; i++)
{
array = prompt('Elija un producto. recomendaciones: darth vader, llavero star wars, torre eiffel').toUpperCase

const arrayproductos =
[
producto1, producto2, producto3
]

if (array == todosLosproductos)
    alert('El producto esta dentro de los indicados')
else 
    alert('El producto no esta dentro de los indicados')

    array = prompt('Elija un producto. recomendaciones: darth vader, llavero star wars, torre eiffel').toUpperCase
}





