let edad; 
edad = prompt("Ingrese su edad")

let respuesta = document.getElementById("respuesta");
respuesta.innerHTML = "El costo de la entrada es ${}"

switch (true) {
    case edad < 4:
        respuesta.innerHTML="El costo de la entrada es gratis"
        break;
    case edad >= 4 && edad <= 18:
        respuesta.innerHTML= "El costo de la entrada es 5€"
        break
    case edad > 18:
        respuesta.innerHTML= "El costo de la entrada es 10€"
        break;
}