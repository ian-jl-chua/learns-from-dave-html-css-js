// Objects
// Objects have key-value pairs
const myObj = { name: 'Ian' }

console.log(myObj)

console.log(myObj.name)

// objects can store all kinds of values, booleans, number, strings, arrays, objects, and also functions
const otherObj = {
  alive: true,
  age: 1860,
  info: ['eat', 'sleep', 'code'],
  beverage: {
    morning: 'blood',
    afternoon: 'blood',
    evening: 'blood',
  },
  action: () => {
    return 'Hello World!'
  },
}

// when accessing values in objects, we can use dot notation or brackets notation
console.log(otherObj.alive)
console.log(otherObj['alive'])
// both these give the same result

// we can use a combo
console.log(otherObj.beverage.evening)
console.log(otherObj['beverage']['evening'])
console.log(otherObj['beverage'].evening)
console.log(otherObj.beverage['evening'])

// calling a function in an object
console.log(otherObj.action())

// Lets look at an example using "this"

// const anotherObject = {
//   property: {
//     color: 'red',
//     texture: 'smooth',
//   },
//   actionTwo: () => {
//     return `Blood is ${this.property.color}`
//   },
// }

// console.log(anotherObject.actionTwo())

// This code ^ is throwing an error because of the usage of an arrow function (() =>) within the actionTwo method. Arrow functions do not have their own this binding. Instead, they capture the this value from the surrounding context (lexical this).

// In the context of the actionTwo method, the arrow function captures the this value from the outer scope (the global scope or the scope where the anotherObject is defined). Since the arrow function is used inside an object literal, it captures the global scope's this, which refers to the global object (e.g., window in browsers or global in Node.js). As a result, this.property will be undefined, leading to an error when trying to access the color property of undefined.

// To access the color property within the actionTwo method, you should use a regular function declaration or an anonymous function expression (not an arrow function) so that it correctly binds to the this of the object instance:

const anotherObject = {
  property: {
    color: 'red',
    texture: 'smooth',
  },
  actionTwo: function () {
    return `Blood is ${this.property.color} and ${this.property.texture}`
  },
}
console.log(anotherObject.actionTwo())

// Now we look at creating objects and inheritance
const vehicle = {
  wheels: 4,
  engine: function () {
    return 'Vro0o0om!!'
  },
}

const truck = Object.create(vehicle)
truck.doors = 2

console.log(truck)
console.log(truck.wheels) //inheritance
console.log(truck.engine())

const car = Object.create(vehicle)
car.doors = 4
car.engine = function () {
  return 'Woooooosh!'
}

console.log(car.wheels)
console.log(car.engine())

const mazda = Object.create(car)
mazda.engine = function () {
  return 'Zooooom!'
}

console.log(mazda.engine())

// Looking at object keys
const band = {
  vocals: 'M',
  drums: 'Darkside',
}

console.log(Object.keys(band))
console.log(Object.values(band))

for (let job in band) {
  console.log(`On ${job} we have ${band[job]}`)
}

// Destructuring
const { drums: myVariable } = band
console.log(myVariable) //logs Darkside

// if you want the variables to be the same name as their keys, you can just have the key when destructuring
const { drums } = band
console.log(drums) // also logs Darkside

function distortedVocals({ vocals }) {
  return `${vocals} is on vocals`
}
console.log(distortedVocals(band))
