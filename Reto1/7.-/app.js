let password = "password";

let contraseñaIngresada = prompt("¿Cual es tu contraseña?");

if (password === contraseñaIngresada) {
    document.getElementById("mensajePassword").innerHTML = "La contraseña es correcta"
}else if (password !== contraseñaIngresada) {
    document.getElementById("mensajePassword").innerHTML = "La contraseña no es correcta"
}

