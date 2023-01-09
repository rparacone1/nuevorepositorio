productos = prompt("Escriba su producto")

    for(let i = 0; i<5; i++) 
    {if ((productos=="Darth Vader") || (productos== "darth vader"))
    {alert("tenemos el producto");
        break;}
    else if((productos=="torre eiffel") || (productos== "Torre Eiffel"))
        {alert("Tenemos el producto");
        break}
    else if ((productos=="llavero star wars") || (productos == "Llavero Star Wars")){
        alert("Tenemos el producto");
        break;}
    else if (i==2){
        alert("Recomendamos escribir los siguientes productos: LLavero Star Wars, Darth vader y Torre Eiffel. Solo nos quedan 3 productos de stock")
    }
    else{
        alert("No tenemos el producto")
    }
    
productos = prompt("Escriba su producto")
}


function datos (){
usuario = prompt("Escriba su nombre de usuario. Ejemplo: @Juan")
dni =  Number(prompt("Escriba su Dni"))

for(l = 0; l<1000000; l++)
{
if ((dni>40000000) && (dni<60000000))
{
    alert(`Bienvenido a nuestro catalogo de productos ${usuario} cuyo dni es ${dni}`)
    console.log(`Bienvenido a nuestro catalogo de productos ${usuario} cuyo dni es ${dni}`)
    break
}
    else
    {
        dni = Number(prompt("Escriba correctamente su Dni"))
    }

}
}
datos()
