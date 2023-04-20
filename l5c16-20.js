// #16 Total amount of points

// My initial test-solution using eval() and replace() methods.

function pointsEval(games) {

  let rank = 0;

  let score = str => eval(str.replace(":", "-"));

  games.forEach(game => score(game) > 0 ? rank += 3 : score(game) < 0 ? rank : rank += 1);

  return rank;
}

// Should be very slow, but works for any game scores, not just one-digit numbers.


// A better, but limited solution using map()

function pointsMap(games) {

  let rank = 0;

  games.map(game => rank += game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0);

  return rank;
}

// Works only with scores given in the task (0 <= x <= 4; 0 <= y <= 4)
// Won't work if score is a two-digit number.


// An alternative limited solution using reduce()

function pointsReduce(games) {

  return games.reduce((rank, score) =>

    rank += score[0] > score[2] ? 3 : score[0] === score[2] ? 1 : 0

    , 0);
}

// Works only with scores given in the task (0 <= x <= 4; 0 <= y <= 4)
// Won't work if score is a two-digit number.

// A combined map() + eval() solution

function pointsEvalMap(games) {

  let rank = 0;

  let newScore = games.map(score => score.replace(":", "-"));

  newScore.forEach(game => rank += eval(game) > 0 ? 3 : eval(game) < 0 ? 0 : 1);

  return rank;
}

// ...benchmarks showed it's actually slower than the original, oh well.


// The most straightforward solution using map() and reduce()
// First, create a proper score map, then apply the scoring rules, 
// then calculate the total sum of the ranks. Fairly fast *and* readable.

function pointsSplitMapReduce(games) {

  let scoreFixed = games.map(score => score.split(':').map(Number));

  let rankMap = scoreFixed.map(([team1, team2]) => team1 > team2 ? 3 : team1 < team2 ? 0 : 1);

  return rankMap.reduce((rank, score) => rank + score, 0);

}

// Works for any game scores, not just one-digit numbers.


// console.log(pointsSplitMapReduce(["4:1", "2:2", "3:1", "4:4", "3:3", "1:0", "2:1", "4:0", "0:0", "2:1"]));
// console.log(pointsSplitMapReduce(["4:1", "2:2", "3:1", "4:4", "3:3", "1:0", "2:1", "4:0", "4:0", "2:1"]));
// console.log(pointsSplitMapReduce(["4:1", "2:2", "3:1", "4:4", "3:3", "1:0", "2:1", "4:0", "123:0", "2:1"]));


// #17 Jenny's secret message (debug)

// Original function rewritten as an ES6 =>

const greet = name => name === "Johnny" ? `Hello, my love!` : `Hello, ${name}!`;

// An even shorter solution

const greeting = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;


// #18 Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((sum, mark) => sum + mark) / marks.length);
}


// #19 Array plus array

function arrayPlusArray(arr1, arr2) {

  let sumArr = arr => arr.reduce((sum, val) => sum + val, 0);

  return sumArr(arr1) + sumArr(arr2);
}

// The shortest solution using ...args / concat

const arrayPlusArrayArgs = (arr1, arr2) => [...arr1, ...arr2].reduce((sum, val) => sum + val, 0);


// #20 Rock Paper Scissors!

// Making an unusual use of switch-case:

const rps = (p1, p2) => {

  switch (p1 + ', ' + p2) {
    case ("scissors, paper"):
    case ("paper, rock"):
    case ("rock, scissors"):
      return "Player 1 won!";

    case ("paper, scissors"):
    case ("rock, paper"):
    case ("scissors, rock"):
      return "Player 2 won!";

    default:
      return "Draw!";
  }
};

// Using object + simple if/else check

function rpsIf(p1, p2) {

  let beats = {scissors: 'rock', paper: 'scissors', rock: 'paper'};

  if (p1 === p2) {

    return "Draw!";

  } else if (p2 === beats[p1]) {

    return "Player 2 won!"
  }

  return "Player 1 won!";
}

// Using RegExp.test() method, just made slightly more readable

const rpsRegExp = (p1, p2) => {

  if(p1 === p2) {

    return 'Draw!';
  }
   
  return `Player ${/rock v. scissors|scissors v. paper|paper v. rock/.test(p1 + " v. " + p2)? 1 : 2} won!`;
}