/** TODO: Import the functions from your three modules here and write test cases for each function. You should have a total of 18 test cases. Do not forget that you need to create the package.json and add the start command to run app.js as the starting script. */

import { arrayPartition, arrayShift, matrixOne } from './arrayUtils.js';
import { swapChars, longestCommonSubstring, palindromeOrIsogram } from './stringUtils.js';
import { objectStats, nestedObjectsDiff, mergeAndSumValues } from './objectUtils.js';

// Test cases for arrayPartition
try {
    // Should Pass
    const arrayToPartition1 = [1, 2, 3, 4, 5];
    const partitionFunc1 = (num) => num % 2 === 0;
    const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1);
    console.log("partitionedArrays1: " + partitionedArrays1);

} catch (e) {
    console.log(e);
}

try {
    // Should Fail
    const arrayToPartition2 = [10];
    const partitionFunc2 = () => true;
    const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); // Expected Result: [[20, 25, 30], [10, 15]]
    console.log(partitionedArrays2);
} catch (e) {
    console.log(e);
}

// // Test cases for arrayShift
try {
    // Should Pass
    const arrayToShift1 = [1, 2, 3, 4, 5];
    const shiftAmount1 = 3;
    const shiftedArray1 = arrayShift(arrayToShift1, shiftAmount1);
    console.log("shiftedArray1: " + shiftedArray1);
} catch (e) {
    console.log(e);
}

try {
    // Should Fail
    const arrayToShift2 = ["Eloquent", 2, "JavaScript", 4, "help"];
    const shiftAmount2 = "me";
    const shiftedArray2 = arrayShift(arrayToShift2, shiftAmount2);
    console.log("shiftedArray2: " + shiftedArray2);
} catch (e) {
    console.log(e);
}


// Test cases for matrixOne
try {
    // Should Pass
    const matrix1 = [[2, 2, 2], [2, 0, 2], [2, 2, 2]];
    const mOneResult1 = matrixOne(matrix1);
    console.log("mOneResult1: " + mOneResult1);
} catch (e) {
    console.log(e);
}

try {
    // Should Fail
    const matrix2 = [[2], [2, 0, 2], [2, 2]];
    const mTwoResult2 = matrixOne(matrix2);
    console.log("mTwoResult2: " + mTwoResult2);
} catch (e) {
    console.log(e);
}

// // Test cases for swapChars
try {
    // Should Pass 
    const swapResult1 = swapChars("Tracy", "Chapman");
    console.log("swapResult1: " + swapResult1);
} catch (e) {
    console.log(e);
}

try {
    // Should Fail 
    const swapResults2 = swapChars("Testing", 123);
    console.log("swapResults2: " + swapResults2);
} catch (e) {
    console.log(e);
}

// // Test cases for longestCommonSubstring
try {
    // Should Pass 
    const strA1 = "creativetechnology";
    const strA2 = "creativetechnologist";
    const commonASubstring = longestCommonSubstring(strA1, strA2);
    console.log("commonASubstring: " + commonASubstring);
} catch (e) {
    console.log(e);
}

try {
    // Should Fail 
    const strB1 = "computers";
    const strB2 = "";
    const commonBSubstring = longestCommonSubstring(strB1, strB2);
    console.log("commonBSubstring: " + commonBSubstring);
} catch (e) {
    console.log(e);

}

// // Test cases for palindromeOrIsogram
try {
    // Should Pass 
    const strArr1 = ["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"];
    const strArrResult1 = palindromeOrIsogram(strArr1);
    console.log("strArrResult1: " + strArrResult1);
} catch (e) {
    console.log(e);
}

try {
    // Should Fail 
    const strArr2 = ["Madam"];
    const strArrResult2 = palindromeOrIsogram(strArr2);
    console.log("strArrResult2: " + strArrResult2);
} catch (e) {
    console.log(e);
}




// // Test cases for objectStats
try {
    // Should Pass 
    const arrayOfObjects1 = [{ a: 12, b: 8, c: 15, d: 12, e: 10, f: 15 }, { x: 5, y: 10, z: 15 }, { p: -2, q: 0, r: 5, s: 3.5 },];
    const statsResult1 = objectStats(arrayOfObjects1);
    console.log("statsResult1: "+ statsResult1);
} catch (e) {
    console.log(e);
}

try {
    // Should Fail 
    const arrayOfObjects2 = [{ p: 10, q: 15, r: 20 }, [ -5, 8, 10 ], { a: 5, b: 5, c: 5 },];
    const statsResult2 = objectStats(arrayOfObjects2);
    console.log("statsResult2: "+ statsResult2);

} catch (e) {
    console.log(e);
}

// // Test cases for nestedObjectsDiff
try {
    // Should Pass 
    const obj1 = { key1: "value1", key2: { nestedKey: "nestedValue", arrayKey: [1, 2, 3], }, };
    const obj2 = { key1: "value1", key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey", };
    const differences = nestedObjectsDiff(obj1, obj2);
    console.log("differences: " + differences);

} catch (e) {
    console.log(e);
}

try {
    // Should fail 
    const obj3 = { a: 1, b: { c: 2, d: [3, 4] }, e: "hello" };
    const obj4 = {};
    const differences1 = nestedObjectsDiff(obj3, obj4); 
    console.log("differences1: " + differences1);
} catch (e) {
    console.log(e);
}

// // Test cases for mergeAndSumValues
try {
    // Should pass 
    const object1 = { a: 3, b: 7, c: "5" };
    const object2 = { b: 2, c: "8", d: "4" };
    const object3 = { a: 5, c: 3, e: 6 };
    const resultMergedAndSummed1 = mergeAndSumValues(object1, object2, object3);
    console.log("resultMergedAndSummed1: " + resultMergedAndSummed1);

} catch (e) {
    console.log(e);
}

try {
    // Should Fail 
    const obj10 = { a: 1, b: "2", c: 3 }; 
    const obj11 = { b: 3, c: 4, d: 5 }; 
    const obj12 = { a: 2, c: "hello", e: 6 }; 
    const resultMergedAndSummed2 = mergeAndSumValues(obj10, obj11, obj12);
    console.log("resultMergedAndSummed2: " + resultMergedAndSummed2);
} catch (e) {
    console.log(e);
}