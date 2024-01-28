function obtenerTipoVehiculo(diametro) {
    if (diametro > 1.4) {
        return "La rueda es para un vehículo grande";
    } else if (diametro > 0.8) {
        return "La rueda es para un vehículo mediano";
    } else {
        return "La rueda es para un vehículo pequeño";
    }
}


function verificarGrosor(diametro, grosor) {
    if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
        return "El grosor para esta rueda es inferior al recomendado";
    } else {
        return "";
    }
}


function main() {
    
    var diametro = prompt("Ingrese el diámetro de la rueda:");
    var grosor = prompt("Ingrese el grosor de la rueda:");

    var tipoVehiculo = obtenerTipoVehiculo(diametro);
    var mensajeGrosor = verificarGrosor(diametro, grosor);

    console.log(tipoVehiculo);
    if (mensajeGrosor !== "") {
        console.log(mensajeGrosor);
    }
}

main();






