// Loops

// while loop
let myNumOne = 0
while (myNumOne < 50) {
  myNumOne++
  console.log(myNumOne)
}

let myString = 'Geralt'
let counter = 0
let myLetter
while (counter <= 5) {
  myLetter = myString[counter]
  console.log(myLetter)
  if (counter === 1) {
    counter += 2
    continue
  }
  if (myLetter === 'a') break
  counter++
}
// this will console "G", "e", "a"

// do while loop
let myNumTwo = 0
do {
  myNumTwo++
  console.log(myNumTwo)
} while (myNumTwo < 50)
// the do while executes the code at least ONE time.

// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
// you can do this with for loops
let myName = 'omggthisisaname'
for (let i = 0; i < myName.length; i++) {
  console.log(myName.charAt(i))
}
