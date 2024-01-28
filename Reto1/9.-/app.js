let edad = prompt("Ingresa tu edad:")

let ingresoMen = prompt("Ingresa tu sueldo mensual:")

if (edad > 18 && ingresoMen >= 1000) {
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = "Si tienes que tributar"
} else {
    respuesta.innerHTML = "No tienes que tributar"
}