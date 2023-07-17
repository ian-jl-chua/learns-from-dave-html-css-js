// IF statements
let customerIsBanned = true
let soup = 'chicken noodle soup'
let crackers = true
let reply

if (customerIsBanned) {
  reply = 'No soup for you.'
} else if (soup && crackers) {
  reply = `Here's your ${soup} and crackers.`
} else if (soup) {
  reply = `Here's your ${soup}`
} else {
  reply = `Sorry, we are out of soup`
}
// Here we are adding a second if statement to check if soup has a value. If it does, it prints out the value instead of just printing soup. And it handles any undefined ones
if (soup && reply === `Here's your ${soup}`) {
  reply = `Sorry, we are out of ${soup}`
} else if (soup === undefined) {
  reply = `Sorry, we are out of soup`
}

console.log(reply)

// Test Score
let testScore = 89
let collegeStudent = true
let grade

if (testScore >= 90) {
  grade = 'A'
} else if (testScore >= 80) {
  grade = 'B'
} else if (testScore >= 70) {
  grade = 'C'
} else if (testScore >= 60) {
  grade = 'D'
} else {
  if (collegeStudent) {
    grade = 'U'
  } else {
    grade = 'F'
  }
}

console.log(grade)

// Decision Tree
// Rock, paper, scissors

if (playerOne === computer) {
  // tie game
} else if (playerOne === 'rock') {
  if (computer === 'paper') {
    // comp win
  } else {
    // P1 wins
  }
} else if (playerOne === 'paper') {
  if (computer === 'scissors') {
    // comp win
  } else {
    // P1 wins
  }
} else {
  if (computer === 'rock') {
    // comp win
  } else {
    // P1 wins
  }
}
