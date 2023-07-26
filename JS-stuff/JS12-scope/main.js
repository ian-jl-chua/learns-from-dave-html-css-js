// var, let and const

// var x = 1
// var x = 2
// console.log(x)

// this changes the value of x from 1 to 2, this can be problematic when you need x to be 1

// let x = 1
// let x = 2

// there is an error here as x cannot be 2 as well, so to reassign a variable, we do this

// let x = 1
// x = 2

// but for const
// const x = 1
// x = 2
// this throws an error because const variables should not be changed.

// so using const where you can and use let for variables to be reassigned

// Global scope
var x = 1
let y = 2
const z = 3

// Local scope has 2 types, block scope or function scope

// Block scope
{
  let y = 4
}

// Function scope
function thisOne() {
  const z = 5
}

// Block scopes can be placed INSIDE functions, but you already know this

// So looking at this example

function myFunc() {
  const z = 6
  console.log(y)
  console.log(z)
  {
    let y = 7
    console.log(y)
    console.log(z)
  }
}
myFunc()
// we get 2,6,7,6 for those console because some are getting values from the GLOBAL scope

// looking at a diff example
console.log(`global : ${x}`)
console.log(`global : ${y}`)
console.log(`global : ${z}`)

function myExample() {
  var x = 10
  const z = 5
  console.log(`function : ${x}`)
  console.log(`function : ${y}`)
  console.log(`function : ${z}`)
  {
    var x = 11 //when you use var, this becomes a function scope
    const z = 6
    console.log(`block : ${x}`)
    console.log(`block : ${y}`)
    console.log(`block : ${z}`)
  }
  console.log(`function : ${x}`) // this is why this has the value of 11
  console.log(`function : ${y}`)
  console.log(`function : ${z}`)

  // depending on where you put your console.log, you get a diff result
}

myExample()
