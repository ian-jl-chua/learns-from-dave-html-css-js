// JSON (JavaScript Object Notation)

// JSON is used to send and receive data
// It is a text format that is completely language independent.
// Therefore JSON is used to send and receive data in many languages, not just in JavaScript but in C#, Python etc...

const myObj = {
  name: 'Ian',
  interest: ['eat', 'sleep', 'blood'],
  greet: function () {
    console.log('Sup')
  },
}
console.log(myObj)
console.log(myObj.name)
myObj.greet()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON) //if you notice, the greet function is not present. That's because JSON does not send functions. It just takes the key value pairs in the object.
console.log(typeof sendJSON) // result "string"
console.log(sendJSON.name) // result undefined, because we can't dot in to a string

const receiveJSON = JSON.parse(sendJSON) // when we receive JSON we need to parse it to "unwrap" the string data
console.log(receiveJSON) // this would display our original object, without the greet function. The greet function was lost when we stringified the object
console.log(typeof receiveJSON) //result "object"