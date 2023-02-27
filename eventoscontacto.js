elformulario = document.getElementById("formulario")
btn = documet.getElementById("traer")

btn.addEventListener("click", validarFormulario)
function validarFormulario(event) {
    event.preventDefault();
    console.log("Formulario enviado");
    
}