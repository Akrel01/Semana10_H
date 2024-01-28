let array = [1, 2, 5, 8, 9, 12, 2, 3];

function sumaDeNumerosPares(array){
        let suma = 0;
        array.forEach(array => {
            if (array % 2 === 0) {
                suma += array;
            }
        });
        return suma
}

let resultado = sumaDeNumerosPares(array);
console.log(resultado);