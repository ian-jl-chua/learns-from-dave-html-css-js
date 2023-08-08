let stringArr = ['none', 'black', 'Ian']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1886, true]

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

let empty = []
// this is type any, because there is nothing there

let bands: string[] = []
// this is predefining the array, saying only strings can go into the band array
bands.push('Mgla') //this is ok
// bands.push(true) is not allowed

// if you are needing SPECIFIC input in SPECIFIC locations of the array, you can make a tuple
let myTuple: [string, number, boolean] = ['Ian', 1800, true]

let mixed = ['John', 1, false]

// if you mouse over myTuple, and mouse over mixed, you will see 2 different types. myTuple has a specific set, and the mixed one is of union type.

mixed = myTuple //this is ok

// myTuple = mixed this is not ok
// this is because mixed is not required to have those 3 elements OR even have them in that order

// we also can't do this
// myTuple[0]= 42
// or this
// myTuple[3]= 42
// but you can do this
myTuple[1] = 69

// Objects
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Ian',
  prop2: true,
}

exampleObj.prop1 = 'John'
// this is fine but...
// exampleObj.prop1 = 54 is not, because prop1 is of string data

// same applies to prop2, it can take boolean but not any other data

// We can annotate Object types like this

type Guitarist = {
  name: string
  active: boolean
  albums: (string | number)[] //this is a union type, and it would be IN the array for albums
}

let roman: Guitarist = {
  name: 'Roman',
  active: true,
  albums: [
    'Autumn Aurora',
    'Blood In Our Wells',
    'Songs of Grief and Solitude',
  ],
}

let m: Guitarist = {
  name: 'M',
  active: true,
  albums: ['Groza', 'With Hearts Towards None', 'Exercises In Futility'],
}

roman = m //this is possible because they are of the same type

// but we can't add to the individual guitarist like this
// roman.age = 47
// this is because the type Guitarist, doesn't have an age property

// We can make a property optional by adding a "?"
type OptionalGuitarist = {
  name: string
  active?: boolean //this makes the active property, optional
  albums: (string | number)[]
}

let john: OptionalGuitarist = {
  name: 'John',
  active: true,
  albums: ['The Mantle', 'Ashes Against The Grain'],
}

let demonaz: OptionalGuitarist = {
  name: 'Demonaz',
  albums: ['Battles In The North', 'At The Heart Of Winter'],
}

// john = demonaz // this can happen because the active property is Optional

const greetGuitarist = (guitarist: OptionalGuitarist) => {
  return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(john))

// We can also use interface instead of type if we are planning to extend the object.

// Types in TypeScript allow you to define a name for a particular type of value. They are often used to create aliases for existing types, making the code more readable and easier to manage.
// Types can be used with primitive types, union types, tuple types, and even with more complex types such as function types or generic types.
// Types can be created using the type keyword, and they are often referred to as type aliases.
// Types are flexible and can be used to define complex combinations of types using intersections and unions.
// Types cannot be extended or implemented by other types. They are primarily used to create aliases for existing types or define custom combinations of types.

// Interfaces in TypeScript are used to define the shape of an object, specifying the names of its properties and their types. They are more commonly used to describe the structure of objects and are particularly useful when you want to enforce that certain properties are present on an object.
// Interfaces can only be used to describe object types.
// Interfaces can be extended by other interfaces, allowing you to build more complex interfaces by combining smaller ones.
// Interfaces can also be implemented by classes, which enforces that a class provides the properties and methods defined in the interface.
// Interfaces are used to enforce stricter contracts on objects and classes, making them useful for modeling data structures and defining APIs.

// example

interface Animal {
  name: string
}

interface Dog extends Animal {
  breed: string
}

// we would not be able to do this with type

// lets look at optional properties again
interface Vehicle {
  name?: string
}

interface Car extends Vehicle {
  wheels: number
}

const aboutVehicle = (vehicle: Vehicle, car: Car) => {
  if (vehicle.name) {
    return `This vehicle is a ${vehicle.name?.toUpperCase()} and it has ${
      car.wheels
    } wheels.`
    // Here, if we call a function on the "name", we would need to add a "?" because the name property for vehicle was optional.
  }
  return `Wow a car.`
}

const myCar: Car = { name: 'Mazda', wheels: 4 }
console.log(aboutVehicle(myCar, myCar))

// ENUMS
// Unlike most TS features, Enums are not a type-level addition to JS but it is added to the language at runtime.

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U)
// if we don't assign a number, it is automatically incremented from "0"

enum NewGrade {
  A = 1,
  B,
  C,
  D,
}

console.log(NewGrade.A)

// we can assign a number to A and the rest will follow suit
