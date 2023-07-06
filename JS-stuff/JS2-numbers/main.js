// Numbers

// An integer is a whole number
const myNumber = 42;
// A float is a decimal number
const myFloat = 1.618;

const myString = "42";

// console.log(myString + 3);
// returns 423
// console.log(myNumber + 3);
// returns 45
// console.log(Number(myString)+ 3);
// returns 45
// console.log(Number(myString) === myNumber);
// returns true
// console.log(Number("lol"));
// returns NaN
// console.log(Number(undefined));
// returns NaN
// console.log(Number(true));
// returns 1
// console.log(Number(false));
// returns 0

////// NUMBER METHODS///////
// console.log(Number.isInteger(myNumber));
// returns true
// console.log(Number.isInteger(myFloat));
// returns false
// console.log(Number.isInteger(myString));
// returns false

// console.log(Number.parseFloat(myString));
// returns 42
// console.log(Number.parseFloat(myFloat));
// returns 1.618
// console.log(Number.parseFloat(myNumber));
// returns 42

const myStringNew = "123.456hekdf789"
// console.log(Number.parseFloat(myStringNew));
// returns 123.456
// console.log(Number.parseFloat(myStringNew).toFixed(2));
// returns "123.46", NOTE: this rounded 456 to 46 AND the data is now a string, not a number

// console.log(Number.parseInt(myStringNew));
// returns 123
// console.log(Number.parseInt(myFloat));
// returns 1

// console.log(myFloat.toString());
// returns "1.618"

// YOU CAN ALSO CHAIN MULTIPLE METHODS TOGETHER USING "." LIKE .toFixed(2).toSting() AND SO ON

// NaN is an acronym for Not a Number
// The Number.isNaN() method, determines whether the passed value is NaN ANDDDDD if it is a number data type

console.log(Number.isNaN("Bob"))
// returns false.... which is confusing af

// The GLOBAL isNaN method, determines whether a value is NaN or not
console.log(isNaN("Bob"))
// returns true