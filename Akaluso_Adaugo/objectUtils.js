import { checkIfParamCount, checkIfParamExists, checkIfString, checkIfStringLength } from "./helpers.js";

export let objectStats = (arrObjects) => {


    arrObjects.forEach((obj, index) => {
    

        if (Object.keys(obj).length === 0) {
            throw new Error('Object is empty');
        }
        if (Object.values(obj).length === 0) {
            throw new Error('Object has no key/value pairs');
        }
        if (Object.values(obj).some(value => typeof value !== 'number')) {
            throw new Error('Object value is not a number');
        }
        // If any element in the array is not an object, throw an error
        if (typeof obj !== 'object' || obj === null || Object.getPrototypeOf(obj) !== Object.prototype) {
            throw new Error(`Object at index ${index} is not an object.`);
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
    const minimun = numVals[0];
    const maximum = numVals[count - 1];

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


    return JSON.stringify({ mean: roundThreeDecimalPoints(mean), median: roundThreeDecimalPoints(median), mode: endMode, range: roundThreeDecimalPoints(range), minimun: roundThreeDecimalPoints(minimun), maximum: roundThreeDecimalPoints(maximum), count, sum });



};

export let nestedObjectsDiff = (obj1, obj2) => {


    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object' || Array.isArray(obj1) || Array.isArray(obj2) || Object.getPrototypeOf(obj1) !== Object.prototype || Object.getPrototypeOf(obj2) !== Object.prototype) {
        throw new Error('One or both parameters cannot be null or one or both parameters must be of type Object.');
    }
    if (Object.keys(obj1).length === 0 || Object.keys(obj2).length === 0) {
        throw new Error('One or both objects are empty.');
    }

    const differences = {};

    const comparisons = (obj1, obj2, path = '') => {
        Object.keys({ ...obj1, ...obj2 }).forEach(key => {
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

    return JSON.stringify(differences);

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