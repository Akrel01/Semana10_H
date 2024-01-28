let array = [4,5,7,9,11];

function calculoPromedio(array){
    if(array.lenght===0){
        return 0;
    }
    const suma = array.reduce((total, num) => total + num, 0);
    return suma / array.length;
}

let promedio = calculoPromedio(array);
console.log(promedio);