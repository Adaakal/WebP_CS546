export const questionOne = (index) => {
  // Implement question 1 here
  if (index < 1) {
    return 0;
  } else if (index === 1) {
    return 1;
  } else {
    return questionOne(index - 1) + questionOne(index - 2);
  }
  
};


export const questionTwo = (arr) => {
  // Implement question 2 here
  /** Prime number: a whole number greater than 1 that cannot be exactly divided by any whole number other
   * than itself and 1.
   */
  // check if the array is empty or does not have numbers as elements
  if (arr.length === 0 || arr.some(isNaN)) {
    return {};
  }
  let isPrime = (num) => {
    if (num <= 1) {
      return false;
    } else if (num === 2 || num === 3) {
      return true;
    }
    for (let i = 3; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    // If the number doesn't fit any of the above conditions, it's a prime number
    return true;

  }
  
  let result = {};
  
  for (let elem of arr) {
    // call isPrime on each element of the array
    const checkPrime = isPrime(elem);

    // the element becomes the key of the object and checkPrimes result becomes the value
    result[elem] = checkPrime;
  }

  return result; //return result
};




export const questionThree = (str) => {
  // Implement question 3 here
  // Create variables for each check 
  const consonants = /[bcdfghjklmnpqrstvwxyz]/;
  const vowels = /[aeiou]/;
  const numbers = /[\d]/;
  const spaces = /[s]/;
  const punctuation = /[.,?!'":;]/;
  const specialChars = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/;

  // An object that will store the results
  let result = {
    consonants: 0,
    vowels: 0,
    numbers: 0,
    spaces: 0,
    punctuation: 0,
    specialChars: 0
  };

  if (str.length === 0) {
    return result;
  }

  for ( let item in str) {
    if (consonants.test(str[item])) {
      result.consonants++;
    } else if (vowels.test(str[item])) {
      result.vowels++;
    } else if (numbers.test(str[item])) {
      result.numbers++;
    } else if (spaces.test(str[item])) {
      result.spaces++;
    } else if (punctuation.test(str[item])) {
      result.punctuation++;
    } else if (specialChars.test(str[item])) {
      result.specialChars++;
    }

    
  }  
  return result;
};



export const questionFour = (arr) => {
  // Implement question 4 here
  // check if the array is empty
  if (arr.length === 0) {
    return [];
  } 
  

  return [...new Set(arr)]; //return result
};


//DO NOT FORGET TO UPDATE THE INFORMATION BELOW OR IT WILL BE -2 POINTS PER FIELD THAT IS MISSING.
export const studentInfo = {
  firstName: 'Adaugo (a-doo-go)',
  lastName: 'Akaluso',
  studentId: '20021246'
};
