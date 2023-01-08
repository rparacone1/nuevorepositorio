productos = prompt("Escriba su mensaje")


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
        alert("Recomendamos incluir a los productos con los siguientes nombres: LLavero Star Wars, Darth vader y Torre Eiffel. Solo nos quedan 3 productos de stock")
    }
    else{
        alert("No tenemos el producto")
    }
    
productos = prompt("Escriba su mensaje")
}

