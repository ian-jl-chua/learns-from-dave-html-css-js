// Functions

// Methods, are build in functions

'Ian'.toLowerCase()
Math.random()

// Function declaration
// this is real basic
// function sum() {
//   return 2 + 2
// }
// console.log(sum())

// we can make this reusable
function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(2, 3))

// here's another example
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf('@'))
}

console.log(getUserNameFromEmail('bobsmith@hotmail.com'))

// this is what slice can do in a string
// slice(indexStart)
// slice(indexStart, indexEnd)
// more info on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Anonymous functions can be created by making it a variable, like this

const product = function (something) {
  return something
}

// Now with ES6 we can have arrow functions

const doThis = (something) => {
  return something
}

// example

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

console.log(toProperCase('wINchesTer'))
