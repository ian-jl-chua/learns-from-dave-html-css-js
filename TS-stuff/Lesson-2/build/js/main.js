"use strict";
let username = 'Ian';
console.log(username);
// let a = 12
// let b = '6'
// let c = 2
// console.log(a / b)
// as we can see here, typescript is strict. So even though on the console, and the main.js, this is executed and returns 2, Typescript is letting us know there is an error
// you can change the code to
// let a:number = 12
// let b:string = '6'
// let c:number = 2
// but really it should be corrected to
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
