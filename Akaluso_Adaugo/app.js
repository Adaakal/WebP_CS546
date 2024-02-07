/** TODO: Import the functions from your three modules here and write test cases for each function. You should have a total of 18 test cases. Do not forget that you need to create the package.json and add the start command to run app.js as the starting script. */

import { arrayPartition } from './arrayUtils.js';
import { arrayShift } from './arrayUtils.js';
import { matrixOne } from './arrayUtils.js';
import { swapChars } from './stringUtils.js';
import { longestCommonSubstring, palindromeOrIsogram } from './stringUtils.js';
import { objectStats } from './objectUtils.js';

// Test cases for arrayPartition
const arrayToPartition1 = [1, 2, 3, 4, 5]; 
const partitionFunc1 = (num) => num % 2 === 0; 


const partitionedArrays1 = arrayPartition(arrayToPartition1, partitionFunc1); // Expected Result: [[2, 4], [1, 3, 5]]
try {
    console.log(partitionedArrays1);
} catch (e) {
    console.log(e);

}
const arrayToPartition2 = [10, 15, 20, 25, 30]; 
const partitionFunc2 = (num) => num > 18; 
const partitionedArrays2 = arrayPartition(arrayToPartition2, partitionFunc2); // Expected Result: [[20, 25, 30], [10, 15]]
console.log(partitionedArrays2);
// Slack question: Will we get points off if our result looks like this:[Array(2), Array(3)]? Is using JSON.stringify() the only way to get the result to look like this: [[2, 4], [1, 3, 5]]?

// Test cases for arrayShift
console.log(arrayShift([3,4,5,6,7], 3) )  // returns [5,6,7,3,4]
console.log(arrayShift(["Hello",true, 5,"Patrick","Goodbye"], 4) )  // returns [true, 5, "Patrick", "Goodbye", "Hello"]

// Test cases for matrixOne
console.log(matrixOne([[2,2,2],[2,0,2],[2,2,2]])) //returns [[2,1,2],[1,1,1],[2,1,2]] 
console.log(matrixOne([[0,1,2,0],[3,5,4,2],[1,7,3,5]])); //returns [[1,1,1,1],[1,5,4,1],[1,7,3,1]] 
//console.log(matrixOne([[0,1,2,0],[3,5,4]]))// throws error 

// Test cases for swapChars
console.log(swapChars("Patrick", "Hill")); //Returns "Hillick Patr"
console.log(swapChars("hello", "world")); //Returns "worlo helld"
// console.log(swapChars("Patrick", "")); //Throws error

// Test cases for longestCommonSubstring
const strA1 = "abcdxyz"; 
const strA2 = "xyzabcd"; 
const commonASubstring = longestCommonSubstring(strA1, strA2); // Expected Result: "abcd"
console.log(commonASubstring);

const strB1 = "programming"; 
const strB2 = "programmer"; 
const commonBSubstring = longestCommonSubstring(strB1, strB2); // Expected Result: "programm"
console.log(commonBSubstring);

const strC1 = "abcdef"; 
const strC2 = "123456"; 
const commonCSubstring = longestCommonSubstring(strC1, strC2); // Expected Result: "" // No common substring in this case
console.log(commonCSubstring);

const strD1 = "abcdef"; 
const strD2 = "acdfgh"; 
const commonDSubstring = longestCommonSubstring(strD1, strD2); // Expected Result: "cd"
console.log(commonDSubstring);

// Test cases for longestCommonSubstring
const checkStrings = (["Madam", "Lumberjack", "He did, eh?", "Background", "Taco cat? Taco cat.", "Invalid String"]); 
const results = palindromeOrIsogram(checkStrings); 
console.log(results);
//returns and then logs:
/*{ "Madam": "Palindrome", "Lumberjack": "Isogram", "He did, eh?": "Palindrome", "Background": "Isogram", "Taco cat? Taco cat.": "Palindrome", "Invalid String": "Neither" }*/

// Test cases for objectStats

const arrayOfObjects1 = [ { a: 12, b: 8, c: 15, d: 12, e: 10, f: 15 }, { x: 5, y: 10, z: 15 }, { p: -2, q: 0, r: 5, s: 3.5 }, ]; 
const statsResult1 = objectStats(arrayOfObjects1); 
console.log(statsResult1);
// Expected Result:{ mean: 8.346, median: 10, mode: 15, range: 17, minimum: -2, maximum: 15, count: 13, sum: 108.5 }
const arrayOfObjects2 = [ { p: 10, q: 15, r: 20 }, { x: -5, y: 8, z: 10 }, { a: 5, b: 5, c: 5 }, ]; 
const statsResult2 = objectStats(arrayOfObjects2); 
console.log(statsResult2);
// Expected Result:{ mean: 8.111, median: 8, mode: 5, range: 25, minimum: -5, maximum: 20, count: 9, sum: 73 }
const arrayOfObjects3 = [ { alpha: 3.5, beta: 7.2, gamma: 4.8 }, { x: 0, y: 0, z: 0 }, { p: -2, q: -8, r: -5 }, ]; 
const statsResult3 = objectStats(arrayOfObjects3); 
console.log(statsResult3);
// Expected Result: { mean: 0.056, median: 0, mode: 0, range: 15.2, minimum: -8, maximum: 7.2, count: 9, sum: 0.5 }