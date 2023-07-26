// Arrays

const myArray = []

// you can add elements into an array
myArray[0] = 'Ian'
myArray[1] = 6
myArray[2] = true
myArray[3] = 'lol'

// referring to an array
console.log(myArray)

// length property
console.log(myArray.length)

// last element in array
console.log(myArray[myArray.length - 1])

// adding to array
myArray.push('omg')
console.log(myArray)

// removing from array
// myArray.pop()

// console.log(myArray)

// you can also grab values that you popped by doing this
const lastItem = myArray.pop()

console.log(lastItem)

// putting stuff to front of array
myArray.unshift(42)
console.log(myArray)

// removing stuff from front of array
myArray.shift()
console.log(myArray)

// if you are removing OR replacing things from an array you can use spice
// like
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* … ,*/ itemN)
// refer to here for more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// looking at slice method on array
const thisArray = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(thisArray.slice(2))
console.log(thisArray.slice(2, 5))

// look at docs at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// reversing array
thisArray.reverse()
console.log(thisArray)

// joining things in array
const newString = thisArray.join()
console.log(newString)

//  you can use diff method for diff things, now because .join() turned this into a string.... we can use a string method like .split() to do this

const newArray = newString.split(',')
console.log(newArray)

// using concat
const thisArrayA = ['A', 'B', 'C']
const thisArrayB = ['D', 'E', 'F']

const concatArr = thisArrayA.concat(thisArrayB)
console.log(concatArr)

// there is a better way of doing this by using the spread operator "..." Spread operator is spreading elements in the array. Because if we are not spreading it, we would end up with arrays in an array
const spreadArr = [...thisArrayA, ...thisArrayB]
console.log(spreadArr)

const noSpreadArr = [thisArrayA, thisArrayB]
console.log(noSpreadArr)

// Lets look at nested arrays
const listA = ['banana', 'carrot', 'apple']
const listB = ['orange', 'grapes', 'pear']

const shelfA = ['can', 'bucket', 'spoon']
const shelfB = ['fork', 'plate', 'cup']

console.log(listA[1]) //this would show 'carrot'
console.log(shelfB[0]) //this would show 'fork'

const list = [listA, listB]
const shelf = [shelfA, shelfB]

console.log(list[0][2]) //this would show 'apple'
console.log(shelf[1][2]) //this would show 'cup'

const shop = [list, shelf]
console.log(shop[0][0][2]) //this would show 'apple'
console.log(shop[1][1][2]) //this would show 'cup'
