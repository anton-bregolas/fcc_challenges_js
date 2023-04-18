// #1 Multiply (debug)

function multiply(a, b) {
  //return was missing
  return a * b;
}

// Shorter solution:

const multiplyES6 = (a, b) => a * b;

// #2 Even or Odd

function evenOrOdd(number) {
  return number % 2 == 0 ? 'Even' : 'Odd';
}

// Alt solution (ES6)

const evenOrOddES6 = number => (number % 2) ? 'Odd' : 'Even';

// #3 Sum of positive

function positiveSum(arr) {
  let sum = 0;

  for (num of arr) {
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}

// Shorter solution using Array.prototype.reduce():

function positiveSumViaReduce(arr) {
  return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
}

// #4 Remove First and Last Character

// Using string methods

function removeChar(str) {
  return str.slice(1, -1);
}

// Shorter solution using ES6 =>

const removeCharES6 = str => str.slice(1, -1);

// Using array methods

function removeCharArr(str) {

  let strA = Array.from(str); // or str.split('')

  strA.pop();
  strA.shift();

  return strA.join('');

}

// #5 Return Negative

// In this simple assignment you are given a number and 
// have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num > 0 ? -num : num;
}