let array1 = [2,5,2];
let array2 = [1,5,3];

function functionArray(array,arraySecond) {
    let newArray = [];

    array1.forEach(number => {
       newArray.push(number*2)
    });
    array2.forEach(number => {
       newArray.push(number*2);
    });   
    return newArray;
}

let resultado = functionArray(array1,array2);
console.log(resultado);