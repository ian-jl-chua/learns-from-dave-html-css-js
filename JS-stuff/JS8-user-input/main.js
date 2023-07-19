// User Input

// alert('Hello Noob')

// let myBoolean = confirm('Ok is true\nCancel is false')
// console.log(myBoolean)

let name = prompt('Please enter your name.')
if (name) {
  console.log(name.length)
  // checking the length of the name
  console.log(name.trim().length)
  // trimming out white spaces, then seeing the length
  console.log(name.trim())
  // this is just the name with trimmed out white space
  console.log(name ?? "You didn't enter your name.")
} else {
  console.log("You didn't enter your name.")
}

// In JavaScript, the double question mark (??) is called the nullish coalescing operator. It is used to provide a default value when working with null or undefined values.

// It's worth noting that the nullish coalescing operator specifically checks for null or undefined and doesn't consider other falsy values such as empty strings, zero, or false. If you want to include all falsy values, you can use the logical OR operator (||) instead.

// So a much more efficient code would be the one below.

// let name = prompt('Please enter your name.')
// console.log((name || "You didn't enter your name.").trim())