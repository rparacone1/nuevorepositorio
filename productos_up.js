
let precioTotal = Number(0)

alert('Productos en stock: Darth vader, llavero star wars, torre eiffel, yoda, avion, auto, camello, arbol')
function Producto(nombre, color, precio)
{
    this.nombre = nombre;
    this.color = color; 
    this.precio = precio;
}


const producto1 = new Producto ('DARTH VADER', 'Negro', 1000);
const producto2 = new Producto ('LLAVERO STAR WARS', 'Negro y rojo', 500);
const producto3 = new Producto ('TORRE EIFFEL', 'Gris', 2000);
const producto4 = new Producto ('YODA', 'Verde', 1500);
const producto5 = new Producto ('AUTO', 'Azul', 400);
const producto6 = new Producto ('AVION', 'Blanco y celeste', 1000);
const producto7 = new Producto ('CAMELLO', 'Naranja', 4000);
const producto8 = new Producto ('ARBOL', 'Verde', 5000);


const elarray = [producto1.nombre, producto2.nombre, producto3.nombre, producto4.nombre, producto5.nombre, producto6.nombre, producto7.nombre, producto8.nombre]
const other = [producto1.precio, producto2.precio, producto3.precio, producto4.precio, producto5.precio, producto6.precio, producto7.precio, producto8.precio]

for (let i=0; i<3; i++)
    {  guardeaqui = prompt("Escriba alguno de los productos").toUpperCase()

        if (elarray.indexOf(guardeaqui) != -1)
        {
            alert("Esta el producto")
            const variable = (elarray.indexOf(guardeaqui))
            const lesume = precioTotal += other[variable]
        }
        else{
            alert("El producto no esta disponible")
        }
    }
alert(`El precio total es de ${precioTotal}`)

// Dom //




let elem = document.getElementById('bievenida');
if (precioTotal>1000)
    {
    elem.classname = "rojo"
    }
else
    {
        elem.classname = "verde"
    }

