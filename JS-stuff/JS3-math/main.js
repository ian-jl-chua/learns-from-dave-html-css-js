// Math methods and properties
console.log(Math.PI)
// return 3.1415...
console.log(Math.trunc(Math.PI))
// trunc removes all decimals of PI, so returns 3
console.log(Math.round(Math.PI))
// rounded to nearest integer, so returns 3
console.log(Math.round(3.4))
// returns 3
console.log(Math.round(3.5))
// returns 4
console.log(Math.ceil(3.4))
// ceil short fro ceiling, so this rounds it up to 4
console.log(Math.floor(3.8))
// floor rounds down, so this would be 3

console.log(Math.pow(2, 4))
// this is 2 to the power of 4, so returns 16
console.log(Math.pow(2, 10))
// returns 1024
console.log(Math.pow(5, 2))
// returns 25

console.log(Math.min(2, 4, 9))
// returns the smallest number that is given, this returns 2
console.log(Math.min(2, 0.4, 5))
// returns 0.4
console.log(Math.max(2, 4, 6))
// returns the largest number, this returns 6

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
// this provides a pseudo number from 0 to 1, this includes 0 but DOES N0T include 1

// Now we can try generating a random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1)
// here we are adding 1 to our multiplication, because if we don't, we get a number from 0 - 9
// NOTE THAT WE DON'T USE THE CEIL METHOD TO GENERATE RANDOM NUMBERS. Reason being, math random generates a number from 0 to 1, and there is a VERY SLIM CHANCE of it returning 0, so using CEIL, you also have a VERY SLIM CHANCE of returning 0. SO using floor, we can always ensure the result is guaranteed.
