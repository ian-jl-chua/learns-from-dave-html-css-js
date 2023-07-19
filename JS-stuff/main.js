// Ternary Operator

// Syntax
// condition ? ifTrue : ifFalse;

// let soup = "chicken soup"
// let response = soup? "yes we have soup" : "sorry, we are out of soup";
// console.log(response)

let soup = 'chicken soup'
let isCustomerBanned = true
let soupAccess = isCustomerBanned
  ? 'Sorry, no soup for you.'
  : soup
  ? `Yes, we have ${soup}`
  : 'Sorry, we are out of soup'

console.log(soupAccess)

// checking score
let testScore = 79
let myGrade =
  testScore > 89
    ? 'A'
    : testScore > 79
    ? 'B'
    : testScore > 69
    ? 'C'
    : testScore > 59
    ? 'D'
    : 'F'

console.log(`My test grade is ${myGrade}`)

// rock, paper, scissors
let playerOne = 'rock'
let computer = 'rock'
let result =
  playerOne === computer
    ? 'Tie Game'
    : playerOne === 'rock' && computer === 'paper'
    ? 'Computer Wins'
    : playerOne === 'paper' && computer === 'scissors'
    ? 'Computer Wins'
    : playerOne === 'scissors' && computer === 'rock'
    ? 'Computer Wins'
    : 'PlayerOne Wins!'

console.log(result)
