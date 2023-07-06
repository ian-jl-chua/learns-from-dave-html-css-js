// strings
const myVariable = 'Mathematics'

// length property
// console.log(myVariable.length);
// returns "11"

/////// STRING METHOD /////////

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// console.log(myVariable.charAt(0));
// finds the character at position 0, in our case "M"

// console.log(myVariable.indexOf("mat"));
// returns "5", cos the lowercase "m" starts at position 5
// console.log(myVariable.indexOf("Mat"));
// returns "0", cos the uppercase "M" starts at position 0
// console.log(myVariable.indexOf("at"));
// returns "1", cos the lowercase "a" starts at position 1, even if there is an "at" at position 6
// console.log(myVariable.indexOf("ati"));
// returns "6", cos the "ati" starts at position 6

// console.log(myVariable.lastIndexOf("at"));
// returns "6", cos the "at" is last positioned at 6
// console.log(myVariable.lastIndexOf("ath"));
// returns "1", cos the "ath" is only at position 1

// slice takes 2 values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// console.log(myVariable.slice(5));
// returns "matics"
// console.log(myVariable.slice(5,2));
// returns nothing
// console.log(myVariable.slice(5,6));
// returns "m"
// console.log(myVariable.slice(5,8));
// returns "mat"

// uppercase
// console.log(myVariable.toUpperCase());
// returns "MATHEMATICS"
// console.log(myVariable.toLowerCase());
// returns "mathematics"

// includes
// console.log(myVariable.includes("div"));
// returns "false"
// console.log(myVariable.includes("mat"));
// returns "true"

// split
// console.log(myVariable.split("e"));
// returns Array(2)[ "Math", "matics" ]
// console.log(myVariable.split(''));
// returns Array(11) [ "M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"]
// console.log("Oh,Mah,G".split(","));
// returns Array(3) [ "Oh", "Mah", "G" ]
// console.log("This is gg".split(" "));
// returns Array(3) [ "This", "is", "gg" ]