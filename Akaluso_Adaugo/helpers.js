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
const checkIfArray = (arr) => {
    if (!(Array.isArray(arr)) || arr.length === 0) {
        throw new Error('Input is not an array or is empty');
    }
 }

 // check if param is a function
 const checkIfFunc = (func) => {
    if (typeof func !== 'function') {
        throw new Error('Input is not a function')
    }
 }
const checkIfParamExists = (param) => {
    if (param === undefined || param === null) {
        throw new Error('Parameter doees not exist or is null');
    }
}

// check if adequate number of params