/* What does expression5 evaluate to? How could you write this in a single line of code?

const expression1 = 100 % 50; -> 0
const expression2 = 100 / 50; -> 2
const expression3 = expression1 < expression2; -> true
const expression4 = expression3 && 300 + 5 === 305; -> true && 305 === 305 - > true
const expression5 = !expression4; -> !true -> false

console.log(expression5); 

expression5b = !((100 % 50 < 100 / 50) && 300 + 5 === 305)

*/

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

expression5b = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(expression5);
console.log(expression5b);