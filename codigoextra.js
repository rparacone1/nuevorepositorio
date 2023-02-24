


// Creacion de plantilla

for(const producto of arrayproductos)
{
    contenedor.innerHTML += `<h1> ${producto.nombre} </h1>
    <p> ${producto.color} </p>
    <b> ${producto.precio} </b>`;  
    document.body.appendChild(contenedor)
}

// Pregunta sobre productos disponibles //

for (let index = 0; index <3; index++)
{
    guardeaqui = prompt("Escriba alguno de los productos").toUpperCase()
    arrayproductos.find((elemento) =>
{
    if(elemento.nombre == guardeaqui)
    {
        const lesume = precioTotal += elemento.precio
        alert("El producto esta disponible")
    } 
}
)
}
alert(`El precio total es de ${precioTotal}`)



// Dom //




benvenuto = document.getElementById("bienvenida")
if(precioTotal>1000)
    {
benvenuto.innerHTML = "<h2>Queremos advertirle que su precio supero el monto maximo para transferencia bancaria</h2>"
benvenuto.className = "rrojo"
}
