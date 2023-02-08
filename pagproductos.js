/*
alert("Los productos que nos quedan disponibles son: Darth Vader, Llavero star wars, torre eiffel")
function produc(){
    productos = prompt("Elija su producto.").toUpperCase()
    for(let i = 0; i<5; i++)
    {
        if (productos == "DARTH VADER") {
        alert("tenemos el producto");
        break
        }
        else if(productos == "TORRE EIFFEL")
        {
        alert("Tenemos el producto");
        break
        }
        else if (productos == "LLAVERO STAR WARS")
        {
        alert("Tenemos el producto");
        break
        }
        else if (i==2){
        alert("Recomendamos escribir los siguientes productos: Llavero Star Wars, Darth vader y Torre Eiffel. Solo nos quedan 3 productos de stock")
        }
        else{
        alert("No tenemos el producto")
        }

        productos = prompt("Escriba su producto").toUpperCase()
    }
        }
    
produc()

function datos (){
usuario = prompt("Escriba su nombre de usuario. Ejemplo: @Juan")
edad =  Number(prompt("Escriba su edad"))

for(l = 0; l<1000000; l++)
{
if (edad>18)
{
    alert(`Bienvenido a nuestro catalogo de productos ${usuario} cuya edad es ${edad}`)
    console.log(`Bienvenido a nuestro catalogo de productos ${usuario} cuya edad es ${edad}`)
    break
}
    else
    {
        edad = Number(prompt("Usted es menor de edad. Vuelva escribir su edad si esto es incorrecto"))
        
    }

}
}
datos()



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
    if (productos == "DARTH VADER")
    {
        precioTotal += (precioDarthVader) 
    
    }
        else if (productos == "TORRE EIFFEL")
    {
        PrecioTotal2 += (precioEiffel) 
    
    }
        else if (productos == "LLAVERO STAR WARS")
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

*/