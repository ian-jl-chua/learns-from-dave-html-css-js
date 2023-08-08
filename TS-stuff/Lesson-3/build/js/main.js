"use strict";
let stringArr = ['none', 'black', 'Ian'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1886, true];
// if you try to do this
// stringArr[0]= 42
// it would show a red squiggly line
// but if you did this
// stringArr[0]= 'John'
// this is ok
// and if you try to do this
// stringArr.push(42)
// this would show a red squiggly line
// but for the guitars array, we can do this
// guitars.push(356)
// or this
// guitars[0] = 564
// stringArr = guitars
// this throws an error because stringArr only takes strings but...
// guitars = stringArr
// is ok because the guitars array can take strings
let empty = [];
// this is type any, because there is nothing there
let bands = [];
// this is predefining the array, saying only strings can go into the band array
bands.push('Mgla'); //this is ok
// bands.push(true) is not allowed
// if you are needing SPECIFIC input in SPECIFIC locations of the array, you can make a tuple
let myTuple = ['Ian', 1800, true];
let mixed = ['John', 1, false];
// if you mouse over myTuple, and mouse over mixed, you will see 2 different types. myTuple has a specific set, and the mixed one is of union type.
mixed = myTuple; //this is ok
// myTuple = mixed this is not ok
// this is because mixed is not required to have those 3 elements OR even have them in that order
// we also can't do this
// myTuple[0]= 42
// or this
// myTuple[3]= 42
// but you can do this
myTuple[1] = 69;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Ian',
    prop2: true,
};
exampleObj.prop1 = 'John';
let roman = {
    name: 'Roman',
    active: true,
    albums: [
        'Autumn Aurora',
        'Blood In Our Wells',
        'Songs of Grief and Solitude',
    ],
};
let m = {
    name: 'M',
    active: true,
    albums: ['Groza', 'With Hearts Towards None', 'Exercises In Futility'],
};
roman = m; //this is possible because they are of the same type
let john = {
    name: 'John',
    active: true,
    albums: ['The Mantle', 'Ashes Against The Grain'],
};
let demonaz = {
    name: 'Demonaz',
    albums: ['Battles In The North', 'At The Heart Of Winter'],
};
// john = demonaz // this can happen because the active property is Optional
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(john));
const aboutVehicle = (vehicle, car) => {
    var _a;
    if (vehicle.name) {
        return `This vehicle is a ${(_a = vehicle.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()} and it has ${car.wheels} wheels.`;
        // Here, if we call a function on the "name", we would need to add a "?" because the name property for vehicle was optional.
    }
    return `Wow a car.`;
};
const myCar = { name: 'Mazda', wheels: 4 };
console.log(aboutVehicle(myCar, myCar));
// ENUMS
// Unlike most TS features, Enums are not a type-level addition to JS but it is added to the language at runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// if we don't assign a number, it is automatically incremented from "0"
var NewGrade;
(function (NewGrade) {
    NewGrade[NewGrade["A"] = 1] = "A";
    NewGrade[NewGrade["B"] = 2] = "B";
    NewGrade[NewGrade["C"] = 3] = "C";
    NewGrade[NewGrade["D"] = 4] = "D";
})(NewGrade || (NewGrade = {}));
console.log(NewGrade.A);
// we can assign a number to A and the rest will follow suit
