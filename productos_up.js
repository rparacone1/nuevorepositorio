let precioTotal = Number(0)
let productos = 
[
    {nombre: 'DARTH VADER', color: 'Negro', precio: 1000},
    {nombre: 'LLAVERO STAR WARS', color: 'Negro y rojo', precio: 500},
    {nombre:'TORRE EIFFEL', color: 'Gris', precio: 2000}
];
productos.push
({nombre: 'YODA', color: 'Verde', precio: 1500},
{nombre: 'AUTO', color: 'Azul', precio: 400},
{nombre: 'AVION', color: 'Blanco y celeste', precio: 1000},
{nombre: 'CAMELLO', color: 'Naranja', precio: 4000},
{nombre: 'ARBOL', color: 'Verde', precio: 5000});


for (let i=0; i<3; i++)
{
guardeaqui = prompt("Escriba alguno de los productos").toUpperCase()
const varilo = productos.find((elemento)=>{
    return elemento.nombre == guardeaqui
});
if(varilo)
{
    const lesume = precioTotal += varilo.precio
}
}
alert(`El precio total es de ${precioTotal}`)




// Dom //

benvenuto = document.getElementById("bienvenida")
if(precioTotal>1000)
    {
benvenuto.innerHTML = "<h2>Queremos advertirle que sue precio supero el monto maximo para transferencia bancaria</h2>"
benvenuto.className = "rrojo"
}
