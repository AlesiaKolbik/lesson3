"use strict";

let arrayNumbers = [];
arrayNumbers = fillArray(arrayNumbers);
console.log(arrayNumbers);
arrayNumbers = changeNumbersFromCenter(arrayNumbers);

function fillArray(array) {
    let length = Math.floor(Math.random() *(1-10))+10;
    for( let i=0;i<length;i++){
        array[i] = Math.floor(Math.random()*(1-10))+10;
    }
    return array;
}
function changeNumbersFromCenter(array) {
    if(array.length === 1){
        return array;
    }
    let arrayCenter = parseInt(array.length/2);
    let counter = 1;
    for( let i=0; i<arrayCenter;i++){
        let memberValue = array[i];
        array[i] = array[array.length-counter];
        array[array.length-counter] = memberValue;
        counter++;
    }
    return array;
}
console.log(arrayNumbers);
