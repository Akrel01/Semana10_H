let personasEncargada = [
    {
        nombre: "Maria",
        dia: "lunes"
    },
    {
        nombre: "Luis",
        dia: "martes"
    },
    {
        nombre: "Antonia",
        dia: "miercoles"
    }
    , 
    {
        nombre: "Pedro",
        dia: "jueves"
    }
    , 
    {
        nombre: "Marisa",
        dia: "viernes"
    }
]



function nombreDeLaPersonaQueCubreElServicio(dia) {
    dia = dia.toLowerCase();

    let servicio = personasEncargada.find(servicio => servicio.dia === dia);

    if(servicio){
        return servicio.nombre;
    } else{
        return "No hay servicio para el dia que usted colocó";
    }

}

let dia = prompt("Escriba el dia que quieres consultar:")

let persona = nombreDeLaPersonaQueCubreElServicio(dia);

console.log(persona)