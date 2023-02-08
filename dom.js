let asas = document.getElementById('zonas');
let agregos = ["redes sociales", "direcciones", "mayorista"];
    for(const agrego of agregos){
        let li = document.createElement("li");
        li.innerHTML = agrego
        asas.appendChild(li);
    }
