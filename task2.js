"use strict";
let arrayNumbers = [];
arrayNumbers = fillArray(arrayNumbers,6);
console.log(arrayNumbers);
arrayNumbers = changeNumbers(arrayNumbers);
console.log(arrayNumbers);

function fillArray(array) {
    let length = Math.floor(Math.random() *(1-10))+10;
    for( let i=0;i<length;i++){
        array[i] = Math.floor(Math.random()*(1-10))+10;
    }
    return array;
}
function changeNumbers(array) {
    if (array.length === 1) {
        return array;
    }
    let centerArray = parseInt(array.length / 2);
    let nextIndexChange = nextIndex(array);

    function nextIndex() { //нахожу индекс элемента с которым буду делать замену
        if (array.length % 2 === 0) {
            return centerArray;
        }
        else {
            return centerArray + 1;
        }
    }

    for (let i = 0; i < centerArray; i++) {
        let memberValue = array[i];
        array[i] = array[nextIndexChange];
        array[nextIndexChange] = memberValue;
        nextIndexChange++;
    }
    return array;
}
