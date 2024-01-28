let primerArray = [2,5,3,7,2];
let segundoArray = [1,5,3,3];

function booleanArray(primerArray,segundoArray) {
    let unionArrays = primerArray.concat(segundoArray);
    return unionArrays.length >= 10;
}

console.log(booleanArray(primerArray,segundoArray))