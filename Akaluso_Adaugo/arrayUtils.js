/** Todo: Implement the functions below and then export them using the ES6 exports syntax. */
import './helpers.js';
let arrayPartition = (arrayToPartition, partitionFunc) => {
    let subArr1 = [];
    let subArr2 = [];

    /** for each currelement in arrtoPart, if arraytopart.partifunc === true, then push 
    * currelement to subarr1 else push cerrelement to subarr2.
    */
    checkIfArray(arrayToPartition);
    checkIfFunc(partitionFunc);
    arrayToPartition.forEach((elem) => { 
        if(partitionFunc(elem) === true) {
        subArr1.push(elem);
    } else {
        subArr2.push(elem);
    }});
}; 