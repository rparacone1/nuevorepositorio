let est = true
function entrada()
{
nombre = prompt ("Ingrese su nombre")
for (let i = 0; i<4; i++)
{
    if ((nombre !="") && (typeof nombre == "string"))
    {
        est = true
        alert("Bienvenido " + (nombre));
        break;
    }
    else
    {   
        est = false
        nombre = prompt ("Ingrese su nombre, por favor");
        

    }

}
}

entrada()

if (est == false)
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
}

console.log(sumarRango(1,10))


