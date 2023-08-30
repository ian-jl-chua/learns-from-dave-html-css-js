// Modules

// since we are using modules, you can see we have included type="module" on the script tag on the index html, this means we don't need to say "defer" because it is automatically implied.

// strict mode is also automatically applied in the JS

// import playGuitar from "./guitars.js"
// console.log(playGuitar())

// import{shredding, plucking} from "./guitars.js"
// console.log(shredding())
// console.log(plucking())


// you can also import these functions "as" something else like...

// import {shredding as shred, plucking as picking} from "./guitars.js"
// console.log(shred())
// console.log(picking())

// we can also look at importing ALL functions form guitars.js

import * as Guitars from "./guitars.js"

console.log(Guitars.default()) // notice how this is not Guitars.playGuitar, because on that guitars.js file, this was a default function.... if we want this to be Guitars.playGuitar, we would have to use "export", and not "export default" on the function itself
// for example:
// export function playGuitar() {
//   return 'Playing guitar!'
// }
console.log(Guitars.shredding())
console.log(Guitars.plucking())

import User from "./user.js"

const me = new User("bob@gmail.com","Bob")
console.log(me)
console.log(me.greeting())