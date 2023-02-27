elformulario = document.getElementById("formulario")
btn = documet.getElementById("skatit")

btn.addEventListener("click", validarFormulario)
function validarFormulario(event) {
    event.preventDefault();
    console.log("Formulario enviado");
    
}