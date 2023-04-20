// #6 String repeat

// Using For Loop

function repeatStrLoop(n, s) {

  let str = '';

  for (let i = 0; i < n; i++) {
    str += s;
  }

  return str;
}

// Using String.prototype.repeat()

function repeatStrMethod(n, s) {

  return s.repeat(n);

}

// #7 Remove String Spaces

// Using string/array methods

function noSpace(x) {

  return x.split(' ').join('');

}

// Using RegExp + ES6

const noSpaceES6 = x => x.replace(/\s/g, '');

// #8 Grasshopper - Summation

// Using a simple For Loop (num > 0)

var summation = function (num) {

  sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;

}

// Shorter solution using math + ES6

const grassHopperSum = num => num * (num + 1) / 2;

// #9 Find the smallest integer in the array

// Using a simple For Loop

class SmallestIntegerFinder {

  findSmallestInt(args) {

    let result = args[0];

    for (let num of args) {
      num < result ? result = num : result;
    }

    return result;
  }
}

// Using Math.min method

class SmallestIntegerFinderViaMin {

  findSmallestInt(args) {

    return Math.min(...args);

  }
}

// Using Array.prototype.sort() with compare function
//
// The logic is the following: all elements are sorted 
// according to the return value of the compare function.
//
// If (a - b) is...
// > 0 => sort a after b, e.g. [b, a]
// < 0 => sort a before b, e.g. [a, b]
// === 0 => keep original order of a and b

class SmallestIntegerFinderViaSort {

  findSmallestInt(args) {

    return args.sort((a, b) => a - b)[0];

  }
}

// #10 Reversed Strings

function solution(str) {
  return str.split('').reverse().join('');
}

// Shorter solution using spread [...str] and ES6

const reverseUsingSpread = s => [...s].reverse().join('');

// Alt solution using For Loop:

function reverseUsingLoop(str) {

  let revStr = '';

  if (typeof str !== 'string') {
    str = String(str);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
}
