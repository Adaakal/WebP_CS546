/** Todo: Implement the functions below and then export them using the ES6 exports syntax. */
import { checkIfArray, checkIfFunc, checkIfParamExists, checkIfParamCount, checkIfNumber, checkIfWholeNumber, checkIfMatrix, checkIfElementCount } from './helpers.js';
export let arrayPartition = (arrayToPartition, partitionFunc) => {
    let subArr1 = [];
    let subArr2 = [];
   
    checkIfParamExists(partitionFunc);
    checkIfParamCount(partitionFunc, 1);
    checkIfElementCount(arrayToPartition, 2);
    checkIfArray(arrayToPartition);
    checkIfFunc(partitionFunc);
    arrayToPartition.forEach((elem) => {
        if (partitionFunc(elem) === true) {
            subArr1.push(elem);
        } else {
            subArr2.push(elem);
        }
    });
   
    return JSON.stringify([subArr1, subArr2]);
}; 

export let arrayShift = (arr, n) => {
    checkIfArray(arr);
    checkIfParamExists(n);
    checkIfElementCount(arr, 2);
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
    checkIfParamExists(matrix);

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