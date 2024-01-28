let array = [2,7,5,11]

let number = 9;


function agregarNumeroAlFinal(array, number) {
    return [...array, number];
  }
  
const arrayNuevo = agregarNumeroAlFinal(array, number);
console.log(arrayNuevo);