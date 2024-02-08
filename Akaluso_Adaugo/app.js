/** TODO: Import the functions from your three modules here and write test cases for each function. You should have a total of 18 test cases. Do not forget that you need to create the package.json and add the start command to run app.js as the starting script. */

import { arrayPartition, arrayShift, matrixOne } from './arrayUtils.js';
import { swapChars, longestCommonSubstring, palindromeOrIsogram } from './stringUtils.js';
import { objectStats, nestedObjectsDiff, mergeAndSumValues } from './objectUtils.js';

// Test cases for arrayPartition
// try {
//     // Should Pass
//     const arrayToPartition1 = [1, 2, 3, 4, 5];
//     const partitionFunc1 = (num) => num % 2 === 0;
//     const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1);
//     console.log("partitionedArrays1: " + partitionedArrays1);

// } catch (e) {
//     console.log(e);
// }

// try {
//     // Should Fail
//     const arrayToPartition2 = [10];
//     const partitionFunc2 = () => true;
//     const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); // Expected Result: [[20, 25, 30], [10, 15]]
//     console.log(partitionedArrays2);
// } catch (e) {
//     console.log(e);
// }

// // Test cases for arrayShift
// try {
//     // Should Pass
//     const arrayToShift1 = [1, 2, 3, 4, 5];
//     const shiftAmount1 = 3;
//     const shiftedArray1 = arrayShift(arrayToShift1, shiftAmount1);
//     console.log("shiftedArray1: " + shiftedArray1);
// } catch (e) {
//     console.log(e);
// }

// try {
//     // Should Fail
//     const arrayToShift2 = ["Eloquent", 2, "JavaScript", 4, "help"];
//     const shiftAmount2 = "me";
//     const shiftedArray2 = arrayShift(arrayToShift2, shiftAmount2);
//     console.log("shiftedArray2: " + shiftedArray2);
// } catch (e) {
//     console.log(e);
// }


// Test cases for matrixOne
// console.log(matrixOne([[2, 2, 2], [2, 0, 2], [2, 2, 2]])) //returns [[2,1,2],[1,1,1],[2,1,2]] 
// console.log(matrixOne([[0, 1, 2, 0], [3, 5, 4, 2], [1, 7, 3, 5]])); //returns [[1,1,1,1],[1,5,4,1],[1,7,3,1]] 
//console.log(matrixOne([[0,1,2,0],[3,5,4]]))// throws error 
// try {
//     // Should Pass
//     const matrix1 = [[2, 2, 2], [2, 0, 2], [2, 2, 2]];
//     const mOneResult1 = matrixOne(matrix1);
//     console.log("mOneResult1: " + mOneResult1);
// } catch (e) {
//     console.log(e);
// }

// try {
//     // Should Fail
//     const matrix2 = [[2], [2, 0, 2], [2, 2]];
//     const mTwoResult2 = matrixOne(matrix2);
//     console.log("mTwoResult2: " + mTwoResult2);
// } catch (e) {
//     console.log(e);
// }

// // Test cases for swapChars
// try {
//     // Should Pass 
//     const swapResult1 = swapChars("Tracy", "Chapman");
//     console.log("swapResult1: " + swapResult1);
// } catch (e) {
//     console.log(e);
// }

// try {
//     // Should Fail 
//     const swapResults2 = swapChars("Testing", 123);
//     console.log("swapResults2: " + swapResults2);
// } catch (e) {
//     console.log(e);
// }

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

// // Test cases for longestCommonSubstring
// const checkStrings = (["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"]);
// const results = palindromeOrIsogram(checkStrings);
// console.log(results);
// //returns and then logs:
// /*{ "Madam": "Palindrome", "Lumberjack": "Isogram", "He did, eh?": "Palindrome", "Background": "Isogram", "Taco cat? Taco cat.": "Palindrome", "Invalid String": "Neither" }*/



// // Test cases for objectStats

// const arrayOfObjects1 = [{ a: 12, b: 8, c: 15, d: 12, e: 10, f: 15 }, { x: 5, y: 10, z: 15 }, { p: -2, q: 0, r: 5, s: 3.5 },];
// const statsResult1 = objectStats(arrayOfObjects1);
// console.log(statsResult1);
// // Expected Result:{ mean: 8.346, median: 10, mode: 15, range: 17, minimum: -2, maximum: 15, count: 13, sum: 108.5 }
// const arrayOfObjects2 = [{ p: 10, q: 15, r: 20 }, { x: -5, y: 8, z: 10 }, { a: 5, b: 5, c: 5 },];
// const statsResult2 = objectStats(arrayOfObjects2);
// console.log(statsResult2);
// // Expected Result:{ mean: 8.111, median: 8, mode: 5, range: 25, minimum: -5, maximum: 20, count: 9, sum: 73 }
// const arrayOfObjects3 = [{ alpha: 3.5, beta: 7.2, gamma: 4.8 }, { x: 0, y: 0, z: 0 }, { p: -2, q: -8, r: -5 },];
// const statsResult3 = objectStats(arrayOfObjects3);
// console.log(statsResult3);
// // Expected Result: { mean: 0.056, median: 0, mode: 0, range: 15.2, minimum: -8, maximum: 7.2, count: 9, sum: 0.5 }

// // Test cases for nestedObjectsDiff
// const obj1 = { key1: "value1", key2: { nestedKey: "nestedValue", arrayKey: [1, 2, 3], }, };
// const obj2 = { key1: "value1", key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey", };
// const differences = nestedObjectsDiff(obj1, obj2);
// // Example Output:   { key2: { nestedKey: "differentValue", arrayKey: [1, 2, 4], }, key3: "newKey" }
// console.log(differences);
// const obj3 = { a: 1, b: { c: 2, d: [3, 4] }, e: "hello" };
// const obj4 = { a: 1, b: { c: 2, d: [3, 5] }, f: "world" };
// const differences1 = nestedObjectsDiff(obj1, obj2); // Expected Result: { b: { d: [3, 5] }, e: undefined, f: "world" }
// console.log(differences1);
// const obj5 = { x: { y: { z: 1 } } };
// const obj6 = { x: { y: { z: 1 } } };
// const differences2 = nestedObjectsDiff(obj3, obj4); // Expected Result: {} // Both objects are identical, so no differences are found.
// console.log(differences2);

// // Test cases for mergeAndSumValues
// const object1 = { a: 3, b: 7, c: "5" };
// const object2 = { b: 2, c: "8", d: "4" };
// const object3 = { a: 5, c: 3, e: 6 };
// const resultMergedAndSummed = mergeAndSumValues(object1, object2, object3);
// console.log("resultMergedAndSummed: " + resultMergedAndSummed);
// // Expected Result: { a: 8, b: 9, c: 16, d: 4, e: 6 }

// const obj11 = { a: 1, b: 2, c: 3 };
// const obj12 = { b: 3, c: 4, d: 5 };
// const obj13 = { a: 2, c: 1, e: 6 };
// const result1 = mergeAndSumValues(obj11, obj12, obj13); // Expected Result: { a: 3, b: 5, c: 8, d: 5, e: 6 }
// console.log("result1: " + result1);
// const obj14 = { x: 10, y: 5, z: 3 };
// const obj15 = { x: 5, y: 2, z: 7 };
// const obj16 = { x: 3, y: 8, z: 1 }; const
//     result2 = mergeAndSumValues(obj14, obj15, obj16); // Expected Result: { x: 18, y: 15, z: 11 }
// console.log("result2: " + result2);
// const obj17 = { one: 15, two: 20 };
// const obj18 = { one: 5, two: 10 };
// const obj19 = { two: 5, three: 8 };
// const result3 = mergeAndSumValues(obj17, obj18, obj19); // Expected Result: { one: 20, two: 35, three: 8 }
// console.log("result3: " + result3);
// console.log("result3: " + result3);
// const obj10 = { a: 1, b: "2", c: 3 };
// const obj111 = { b: 3, c: 4, d: 5 };
// const obj112 = { a: 2, c: "hello", e: 6 };
// const result4 = mergeAndSumValues(obj10, obj111, obj112); // Throws an error
// console.log("result3: " + result3);