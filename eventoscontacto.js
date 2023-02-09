elformulario = document.getElementById("formulario")
elformulario.addEventListener("submit", validarFormulario)

function validarFormulario(event) {
    event.preventDefault();
    console.log("Formulario enviado");
}