/** Todo: Implement any helper functions below and then export them for use in your other files */

// Path: arrayUtils.js
/**  You must check:

That the arrayToPartition parameter exists and is of proper type (an array).
That the arrayToPartition parameter is not an empty array
That the arrayToPartition parameter has at LEAST 2 elements
That the partitionFunc parameter exists and is of proper type (a function).
If any of those conditions fail, you will throw an error.

*/
// check if param is an array
export const checkIfArray = (arr) => {
    if (!(Array.isArray(arr)) || arr.length === 0) {
        throw new Error('Input is not an array or is empty');
    }
 }

 // check if param is a function
 export const checkIfFunc = (func) => {
    if (typeof func !== 'function') {
        throw new Error('Input is not a function')
    }
 }
export const checkIfParamExists = (param) => {
    if (param === ' ' || param === null) {
        throw new Error('Parameter does not exist or is null');
    }
}

// check if adequate number of params
export const checkIfParamCount = (func, n) => {
    if (func.length !== n) {
        throw new Error('Parameter count is not sufficient.')
    }
};

// check if x is a number
export const checkIfNumber = (x) => {
    if (typeof x !== 'number') {
        throw new Error('Input is not a number!');
    }
}

// check if number is a whole number
export const checkIfWholeNumber = (x) => {
    if (x % 1 !== 0) {
        throw new Error('Input is not a whole number!');
    }
}

// check the matrix arg exists and is an array
export const checkIfMatrix = (matrix) => {
    if(!Array.isArray(matrix) || matrix.some(row => !Array.isArray(row) || row.length !== matrix[0].length || row.some(element => typeof element !== 'number'))) {
        throw new Error('Input is not a matrix! or has different row lengths or contains non-numeric elements.')
    }

}

// check if string is a string
export const checkIfString = (str) => {
    if (typeof str !== 'string') {
        throw new Error('Input is not string.');
    }
 }

 // check if length of string is x
 export const checkIfStringLength = (str, x) => {
    if (str.length !== x) {
        throw new Error('String length is not equal to ' + x);
    }
 }

 export const checkIfElementCount = (arr, elemCount) => {
    if (arr.length !== elemCount) {
        throw new Error(`Array length 'is not' equal to ${elemCount}`)
    }
 }

 