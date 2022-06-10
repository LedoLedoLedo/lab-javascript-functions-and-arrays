// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b){
  if(a>b){
    return a
  } else{
    return b
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (wordArr) {
  if (wordArr.length === 0){
    return null;
  }
  let longestWord = "";
  for(let i = 0; i < wordArr.length; i++){
    if (wordArr[i].length > longestWord.length) {
	    longestWord = wordArr[i];
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNum) {
  if (arrNum.length === 0 ){
     return 0;
  }
  let sum = 0;
  for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum[i];
  }  
  return sum;
}

// Iteration #3.1 Bonus:
function sum() {}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numArr) {
  if (numArr.length === 0){
    return null;
  }
  let sum = 0;
  for (let i=0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum/numArr.length;
}


// Level 2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0){
    return null
  }
  let sum = 0;
   for (let i=0;i<wordsArr.length;i++){
     sum += wordsArr[i].length;
   } 
  return sum/wordsArr.length;
}

// // Bonus - Iteration #4.1
// function averageNumbers(items) {
//   let sum = 0;
//   let count = items.length;
//   for (let i=0; i<count; i++) {
//     sum += items[i];
//   }
//   return sum/count;
// }

function avg(){}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray (wordArr) {
  if (wordArr.length === 0) {
    return null;
  } 
  let uniqueArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (uniqueArr.indexOf(wordArr[i]) === -1) {
       uniqueArr.push(wordArr[i]);
    }
  }
  return uniqueArr; 
}

// Bonus - Iteration #5.1: Unique arrays using Set

function uniquifyArrayWithSet() {}

// Iteration #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, word) {
  if (wordsFind.length === 0) {
    return null;
  } 
  for (let i = 0; i<wordsFind.length; i++) {
    if (wordsFind[i]===word) {
     return true;
    }
  }
  return false;
} 


// Iteration #7: Count repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordArr, searchWord) {
  if (wordArr.length === 0)  {
    return 0;
  }
  let counter = 0;
  wordArr.forEach(word => {
    if (word === searchWord ) {
      counter++;
    }
  });
  return counter;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    uniquifyArrayWithSet
  };
}
