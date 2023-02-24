let precioTotal = Number(0)
class Producto{
    constructor(id, nombre, color, precio, img)
    {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;

    }
    }

const arrayproductos = [];
arrayproductos.push(new Producto(1,'YODA', 'Verde', 1500));
arrayproductos.push(new Producto(2,'TORRE EIFFEL', 'Gris', 2000));
arrayproductos.push(new Producto(3,'ARTURITO', 'Verde', 1500));
arrayproductos.push(new Producto(4,'CHUBACA', 'Azul', 400)),
arrayproductos.push(new Producto(5, 'DARTH VADER', 'Negro', 1000));
arrayproductos.push(new Producto(6, 'LLAVERO STAR WARS', 'Negro y rojo', 500));
arrayproductos.push(new Producto(7,'TRIPIO', 'Blanco y celeste', 1000))

let aszr = document.getElementsByClassName("flex-padre");
for(const producto of arrayproductos)
{
    aszr[0].innerHTML += `<div class="Flex-flex">
    <img src="Imagenes/${producto.id}.jpg" height="250px" width= "auto" alt="">
    </div>`
    aszr[1].innerHTML += `<div class="Flex-flex">
    <img src="Imagenes/${producto.id}.jpg" height="250px" width= "auto" alt="">
    </div>`
}
