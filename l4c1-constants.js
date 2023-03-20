/* Do the following two blocks of code result in the same answer? If not, which one would you recommend using and why?

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber; -> results in false, firstNumber !== secondNumber, one is a number, the other one a string

console.log(result);

const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber; -> results in 'true' since 20 == '20'

console.log(result); */

const firstNumber = 20;
let secondNumber = '20';

let result1 = firstNumber == secondNumber;
let result2 = firstNumber === Number(secondNumber);
let result3 = String(firstNumber) === secondNumber;

secondNumber = 20;
let result4 = firstNumber === secondNumber;

console.log(result1); 
console.log(result2); 
console.log(result3); 
console.log(result4); 

// Trick question - solution 4 is the easiest!