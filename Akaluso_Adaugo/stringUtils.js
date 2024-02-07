/** Todo: Implement the functions below and then export them using the ES6 exports syntax. */

import { checkIfParamCount, checkIfParamExists, checkIfString, checkIfStringLength } from "./helpers.js";

export let swapChars = (string1, string2) => {
    let minStrLen = 4;
    checkIfParamCount(2);
    checkIfParamExists(string1);
    checkIfParamExists(string2);
    checkIfString(string1);
    checkIfString(string2);
    const trimmedStr1 = string1.trim();
    const trimmedStr2 = string2.trim();
    if (trimmedStr1.length < minStrLen || trimmedStr2.length < minStrLen) {
        throw new Error('String length is less than 4 characters.');
    }



    const newStr1 = trimmedStr2.substring(0, 4) + trimmedStr1.substring(4);
    const newStr2 = trimmedStr1.substring(0, 4) + trimmedStr2.substring(4);

    let returnStr = newStr1 + " " + newStr2;

    return returnStr;


};

export let longestCommonSubstring = (str1, str2) => {
    let trimmedStr1 = str1.trim();
    let trimmedStr2 = str2.trim();
    let minStrLen = 5;
    if (checkIfParamExists(trimmedStr1) || checkIfParamExists(trimmedStr2)) {
        throw new Error('Parameter does not exist.');
    }

    checkIfString(trimmedStr1);
    checkIfString(trimmedStr2);

    if (trimmedStr1.length < minStrLen || trimmedStr2.length < minStrLen) {
        throw new Error('String length is less than 5 characters.');
    }
    // What's the difference between empty strings and strings with spaces?
    if (trimmedStr1 === " " || trimmedStr2 === " ") {
        throw new Error('String length is less than 5 characters.');
    }

    let longestSubStr = "";
    for (let i = 0; i < trimmedStr1.length; i++) {
        for (let j = 0; j < trimmedStr1.length; j++) {
            let subStr = trimmedStr1.substring(i, j);
            if (trimmedStr2.includes(subStr) && subStr.length > longestSubStr.length) {
                longestSubStr = subStr;
            }
        }
    }

    return longestSubStr;


};

export let palindromeOrIsogram = (arrStrings) => {
    checkIfParamCount(1);
    checkIfParamExists(arrStrings);
    let trimmedArrStrings = arrStrings.map(str => str.trim());




    let resultObj = {};


    trimmedArrStrings.forEach(str => {
        let allLowerCaseStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
        let checkPalindrome = allLowerCaseStr === allLowerCaseStr.split('').reverse().join('');

        let checkIsogram = new Set(allLowerCaseStr).size === allLowerCaseStr.length;

        if (checkPalindrome && checkIsogram) {
            resultObj[allLowerCaseStr] = "Both";
        } else if (checkPalindrome) {
            resultObj[allLowerCaseStr] = "Palindrome";
        } else if (checkIsogram) {
            resultObj[allLowerCaseStr] = "Isogram";
        } else {
            resultObj[allLowerCaseStr] = "Neither";
        }
    });

    return resultObj;

};