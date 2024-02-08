import { checkIfParamCount, checkIfParamExists, checkIfString, checkIfStringLength } from "./helpers.js";

export let objectStats = (arrObjects) => {
    /** You must check:

 • That the input parameter arrObjects exists and is of proper type (an array)

• That each element in the array is an object

• That each object in the array is not empty and has at least 1 key/value pair

• Each object value for each key is a number (can be positive, negative, decimal, zero) and Decimal numbers should be rounded to a maximum of three decimal places.

 */

    arrObjects.forEach((obj) => {
        // checkIfParamExists(obj);
        // checkIfString(obj);
        // checkIfStringLength(obj);
        // checkIfParamCount(obj);
        // checkIfNumber(obj);

        if (Object.keys(obj).length === 0) {
            throw new Error('Object is empty');
        }
        if (Object.values(obj).length === 0) {
            throw new Error('Object has no key/value pairs');
        }
        if (Object.values(obj).some(value => typeof value !== 'number')) {
            throw new Error('Object value is not a number');
        }

    });

    // Flatten values from array objects 
    const numVals = arrObjects.flatMap(obj => Object.values(obj).filter(val => typeof val === 'number'));

    // Sort values 
    numVals.sort((a, b) => a - b);

    const sum = numVals.reduce((acc, val) => acc + val, 0);
    const count = numVals.length;
    const mean = sum / count;
    const median = count % 2 === 0 ? (numVals[count / 2 - 1] + numVals[count / 2]) / 2 : numVals[Math.floor(count / 2)];
    const range = numVals[count - 1] - numVals[0];
    const min = numVals[0];
    const max = numVals[count - 1];

    // Calculating mode
    const frequency = numVals.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    const maxFrequency = Math.max(...Object.values(frequency));
    const mode = Object.keys(frequency).filter(key => frequency[key] === maxFrequency).map(Number);
    const endMode = mode.length === numVals.length ? 0 : mode.length === 1 ? mode[0] : mode;

    function roundThreeDecimalPoints(num) {
        return parseFloat(num.toFixed(3));
    }
    // roundThreeDecimalPoints(mean);
    // roundThreeDecimalPoints(median);
    // roundThreeDecimalPoints(mode);
    // roundThreeDecimalPoints(range);
    // roundThreeDecimalPoints(min);
    // roundThreeDecimalPoints(max);


    return { mean: roundThreeDecimalPoints(mean), median: roundThreeDecimalPoints(median), mode: endMode, range: roundThreeDecimalPoints(range), min: roundThreeDecimalPoints(min), max: roundThreeDecimalPoints(max), count, sum };



};

export let nestedObjectsDiff = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        throw new Error('One or both parameters cannot be null.');
    }

    const differences = {};

    const comparisons = (obj1, obj2, path = '') => {
        Object.keys({...obj1, ...obj2 }).forEach(key => {
            const value1 = obj1[key];
            const value2 = obj2[key];
            const newPath = path ? `${path}.${key}` : key;

            if (value1 && typeof value1 === 'object' && value2 && typeof value2 === 'object') {
                comparisons(value1, value2, newPath);
            } else if (value1 !== value2) {
                differences[newPath] = { from: value1, to: value2 };
            }

        });
    };

    comparisons(obj1, obj2);

    return differences;

};

export let mergeAndSumValues = (...args) => {
    const resultObj = {};
    args.forEach(obj => {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('One or more parameters are not objects.');
        }
        if (Object.keys(obj).length === 0) {
            throw new Error('Object is empty'); 
        }
        

        

        Object.entries(obj).forEach(([key, value]) => {
            const numVal = typeof value === 'string' ? parseFloat(value) : value;

            if (isNaN(numVal)) {
                throw new Error(`Value given as key '${key}' isnt a number nor a str that can be representing a number.`);
            }

            resultObj[key] = (resultObj[key] || 0) + numVal;
        });
    

    });    

    return JSON.stringify(resultObj);

}