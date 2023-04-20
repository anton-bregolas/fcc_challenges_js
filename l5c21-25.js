// #21 Is he gonna survive?

const hero = (bullets, dragons) => bullets >= dragons * 2? true : false;

// And the shortest way is...

const heroLives = (bullets, dragons) => dragons <= bullets / 2;


// #22 Convert a string to an array

let stringToArray = str => str.split(' ');


// #23 Get Planet Name By ID (debug)

  // Switch-case solution:

  function getPlanetName(id) {
    var name;
    switch (id) {
      case 0:
        // added case 0 and cases 9-10, just in case
        name = 'The Sun is our star, not a planet';
        break;
      case 1:
        name = 'Mercury';
        // break was missing, 
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
      case 9:
        name = 'Pluto (minor planet since 2006)';
        break;
      case 10:
        name = 'Nice try, but Planet X is not real';
        break;
      // default in case the user inputted something else
      default:
        name = 'No such planet, try inputting numbers 1-9';
    }

    return name;
  }

// Alt solution:

  function getPlanetNameAlt(id) {

    if (typeof id === 'number' && id > 0 && id < 10) {

      return (['Mercury', 'Venus', 'Earth', 'Mars',
        'Jupiter', 'Saturn', 'Uranus', 'Neptune',
        'Pluto (minor planet since 2006)'])[Math.trunc(id - 1)];
    }

    console.log('No such planet, try inputting numbers 1-9');
  }


// #24 Cat years, Dog years

// Using simple if check and array push method

let humanYearsCatYearsDogYearsFunc = function(humanYears) {

  let age = [humanYears];
  let catYears = dogYears = 15;
  let ageCalc = () => age.push(catYears, dogYears);
  
  if (humanYears > 1) {
  
    catYears += 9 + 4 * (humanYears - 2);
    dogYears += 9 + 5 * (humanYears - 2);
  }

  ageCalc();

  return age;
}

// Using a shorter ES6 => notation

let humanYearsCatYearsDogYears = humanYears => 
  [humanYears, 
  15 + (humanYears > 1 ? 9 + 4 * (humanYears - 2) : 0), 
  15 + (humanYears > 1 ? 9 + 5 * (humanYears - 2) : 0)]


// #25 Vowel Count (a, e, i, o, u)

// Using RegExp.test()

function getCount(str) {

  let count = 0;
  let arr = str.split('');

  arr.forEach(elem => /a|e|i|o|u/.test(elem) ? count++ : count);

  return count;
}

// Using String.match(RegExp) + i (case insensitive) + g (global search)

const getCountES6 = function getCount(str) {
  let count = str.match(/[aeiou]/ig);
  return count ? count.length : 0;
}

// String.prototype.match() retrieves matching results
// to an array (if nothing, it creates [""] by default)
// g flag -> retrieve all matching results, not just 1st
// i flag -> make search case insensitive 
// count.length counts the number of vowels
// condition avoids null if no vowels found