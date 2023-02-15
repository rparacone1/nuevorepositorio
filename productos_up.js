let precioTotal = Number(0)
class Producto{
    constructor(nombre,color,precio)
    {
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
    }

    }

const arrayproductos = [];
arrayproductos.push(new Producto('DARTH VADER', 'Negro', 1000));
arrayproductos.push(new Producto('YODA', 'Verde', 1500));
arrayproductos.push(new Producto('LLAVERO STAR WARS', 'Negro y rojo', 500));
arrayproductos.push(new Producto('TORRE EIFFEL', 'Gris', 2000));
arrayproductos.push(new Producto('AUTO', 'Azul', 400)),
arrayproductos.push(new Producto('AVION', 'Blanco y celeste', 1000)),
arrayproductos.push(new Producto('CAMELLO', 'Naranja', 4000)),
arrayproductos.push(new Producto('ARBOL', 'Verde', 5000));


for (let index = 0; index <3; index++) {
    guardeaqui = prompt("Escriba alguno de los productos").toUpperCase()
    arrayproductos.find((elemento) =>
{
    if(elemento.nombre == guardeaqui)
    {
        const lesume = precioTotal += elemento.precio
        alert("El producto esta disponible")
    } 
})

}  
alert(`El precio total es de ${precioTotal}`)




// Dom //

benvenuto = document.getElementById("bienvenida")
if(precioTotal>1000)
    {
benvenuto.innerHTML = "<h2>Queremos advertirle que sue precio supero el monto maximo para transferencia bancaria</h2>"
benvenuto.className = "rrojo"
}
