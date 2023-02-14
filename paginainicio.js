

function entrada()
{
nombre = prompt ("Ingrese su nombre")

for (let i = 0; i<4; i++)
{
    if ((nombre !="") && (nombre != Number(nombre)))
    {
        alert("Bienvenido " + nombre);
        break
    }
    else
    {   
        nombre = prompt("Ingrese su nombre, por favor"); 
    }

    if((i==3) && (nombre != Number(nombre)))
    {
        alert('El numero de intentos a finalizado') 
    }


}
}

entrada()