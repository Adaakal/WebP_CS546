/** Todo: Implement the functions below and then export them using the ES6 exports syntax. */
import { checkIfArray, checkIfFunc, checkIfParamExists, checkIfParamCount, checkIfNumber, checkIfWholeNumber, checkIfMatrix } from './helpers.js';
export let arrayPartition = (arrayToPartition, partitionFunc) => {
    let subArr1 = [];
    let subArr2 = [];
    // let resultArr = [];

    /** for each currelement in arrtoPart, if arraytopart.partifunc === true, then push 
    * currelement to subarr1 else push cerrelement to subarr2.
    */
    checkIfParamExists(partitionFunc);
    checkIfParamCount(partitionFunc, 1);
    checkIfArray(arrayToPartition);
    checkIfFunc(partitionFunc);
    arrayToPartition.forEach((elem) => {
        if (partitionFunc(elem) === true) {
            subArr1.push(elem);
        } else {
            subArr2.push(elem);
        }
    });
    // resultArr.push(subArr1, subArr2);
    return JSON.stringify([subArr1, subArr2]);
}; 

export let arrayShift = (arr, n) => {
    checkIfArray(arr);
    checkIfParamExists(n);
    //checkIfParamCount(2);
    checkIfWholeNumber(n);

    
    if (n === 0) {
        return arr;
    }

    // To ensure shift is within the bounds of the array
    const arrShift = n % arr.length;

    if (arrShift === 0) return arr;

    // Using ternary operator to determine if shift is positive or negative
    return arrShift > 0 ? [...arr.slice(-arrShift), ...arr.slice(0, -arrShift)] : [...arr.slice(-arrShift), ...arr.slice(0, arr.length + arrShift)];

};

export let matrixOne = (matrix) => {
    checkIfMatrix(matrix);
    checkIfArray(matrix);

    // The Set object lets you store unique values of any type, whether primitive values(str, num, bigint, bool, undef, sym, null) or object references.

    let rows = new Set(); 
    let cols = new Set();

    matrix.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (col === 0) {
                rows.add(rowIdx);
                cols.add(colIdx);
            }
        });
    });

    return JSON.stringify(matrix.map((row, rowIdx) => 
        row.map((col, colIdx) => 
            rows.has(rowIdx) || cols.has(colIdx) ? 1 : col)
        ));


};