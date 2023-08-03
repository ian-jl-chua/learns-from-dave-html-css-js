// JS Error and Error Handling

// JS is prone to error because of its flexibility for example
// name = "Ian"
// console.log(name) // result is Ian

// but if we type

'use strict' // like this...
// name = "Ian"
// console.log(name) would result in an ReferenceError: Variable not defined

// this would only work if we wrote
// let name = "Ian"
// console.log(name) // result is Ian

// const myName = "Ian"
// myName = "Bob" // would result in a TypeError: invalid assignment to const 'myName'

// Here is a function type error

const makeError = () => {
  try {
    const myName = 'Ian'
    myName = 'John'
  } catch (err) {
    // console.log(err)
    // console.warn(err)
    console.error(err) //this is more commonly used
    console.error(err.name)
    console.error(err.message)
  } finally {
    // any code here will execute no matter what, if an error is thrown, this still gets executed. If no error is thrown this block will also get executed
  }
}

makeError()

const anotherError = () => {
  let i = 1
  while (i <= 5) {
    try {
      if (i % 2 != 0) {
        throw new Error('AHHH ODD!')
      }
      console.log("Even Number")
    } catch (err) {
      // console.log(err)
      // console.warn(err)
      console.error(err) //this is more commonly used
      console.error(err.name)
      console.error(err.message)
    } finally {
      console.log('...finally')
      i++
    }
  }
}

anotherError()

// SUMMARY
// Try will try the code, Catch will only execute if there is an error, and Finally will execute no matter what happens