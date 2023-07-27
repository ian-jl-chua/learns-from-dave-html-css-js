// let myName = "Ian"
// this implicitly implies that myName has a string value

let myName: string = 'Ian'
// this EXPLICITLY says that it IS a string

// TS will Infer a data type if it is not explicitly declared anyway
// you can also do something like this

let myString: string
// and do nothing with it

myName = 'John'
// this now changes myName to John

let meaningOfLife: number
let isLoading: boolean
let album: any

meaningOfLife = 42
isLoading = true

album = 'With Hearts Towards None'
album = 42
album = true
// here we can assign anything to album, because we have the ANY data type.

// const sum = (a, b) => {
//   return a + b
// }
// this code creates a squiggly line below the "a" and "b" in the parameter (). In order to make it clearer for TS, we would type this

const sum = (a: number, b: number) => {
  return a + b
} // if you hover over sum, you will see that this returns a number

const sumOther = (a: number, b: string) => {
  return a + b
} // if you hover over sumOther, you will see that this returns a string

// This is a UNION type
let postId: string | number
let isActive: number | boolean
// you can put more types in like "number | boolean | string"

let re: RegExp = /\w+/g
