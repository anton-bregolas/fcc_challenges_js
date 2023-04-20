// #11 Counting sheep...

// Using an iteration with forEach

function countSheepForEach(arrayOfSheep) {
  let sum = 0;
  arrayOfSheep.forEach(elem => elem === true? sum++ : sum);
  return sum;
}

// Using Array.prototype.filter()

function countSheepViaFilter(arrayOfSheep) {

  return arrayOfSheep.filter(Boolean).length;

}

// NB: the filter array method filters out all the falsy values

// #12 Is n divisible by x and y?

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

// Shorter solution using ES6 =>

const isDivisibleES6 = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;

// An even shorter solution, but less readable

const isDivisibleShort = (n, x, y) => n % x === 0 && n % y === 0;

// #13 Century From Year

function century(year) {
  return (year / 100) % 1 !== 0 ? Math.trunc(year / 100) + 1 : Math.trunc(year / 100);
}

// Shorter solution using Math.ceil and ES6

const centuryES6 = year => Math.ceil(year/100);

// The Math.ceil() method returns an integer 
// greater than or equal to inputted number

// #14 Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  let result;

  switch (operation) {

    case "+": 
    result = value1 + value2;
    break;

    case "-": 
    result = value1 - value2;
    break;

    case "*": 
    result = value1 * value2;
    break;

    case "/": 
    result = value1 / value2;
    break;

    default:
    result = 0;
    console.log("Input operation (+ - * /) and two values separated by commas.");

  }

  return result;
}

// Shorter solution with return instead of break 

function basicOpShort(operation, value1, value2){
  switch(operation){
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
  }

  return 0;
}

// The shortest solution using eval method

function basicOpEval(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// The eval() function evaluates a string 
// and then returns its completion value.

// #15 Beginner - Lost Without a Map

function maps(x){

  return x.map(value => value * 2);

}

// Shorter solution using two ES6 =>

mapsES6 = x => x.map(value => value * 2);

