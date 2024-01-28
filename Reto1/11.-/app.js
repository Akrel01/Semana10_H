let personas = [
    {   nombre: 'boris',
        hobby: 'correr',
        salario: 2000 
    },
    {   nombre: 'luis', 
        hobby: 'cantar', 
        salario: 1500 },
    {   nombre: 'carmen',
        hobby: 'cocinar',
        salario: 800 },
    {   nombre: 'percy',
        hobby: 'cantar',
        salario: 1100 },
    {   nombre: 'rosa',
        hobby: 'leer', 
        salario: 3000 },
    ];



function hallasSalario(personas) {
   return personas.filter(persona => persona.salario > 1200);
}

function hobbyCantar(personas){
    return personas.filter(persona => persona.hobby =="cantar");
}

function hobbyLeer(personas) {
    return personas.some(persona => persona.hobby == "leer")
}

console.log("Personas con salario mayor a 1200:", hallasSalario(personas));
console.log("Primera persona que canta:", hobbyCantar(personas));
console.log("¿Alguien le gusta leer?", hobbyLeer(personas));