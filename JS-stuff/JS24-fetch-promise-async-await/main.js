// Fetch API
// Looking at Callbacks, Promises, .then(), Async/Await

// Callbacks
// These are functions that are passed to other functions, as parameters
function firstFunc(parameter, callback) {
  // do stuff with parameter

  // then we do the callback function
  callback()
}
// This here could lead to "callback Hell"... with a scenario like this

firstFunc(para, function () {
  // do stuff in para
  secondFunc(para, function () {
    // do stuff in para
    thirdFunc(para, function () {})
  })
})

// Promises
// Has 3 states : Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false //if you change this to true, you will see an error message in the console

  if (!error) {
    resolve('Resolved the promise!')
  } else {
    reject('No, rejected the promise')
  }
})

console.log(myPromise) // Now this just gives us the STATE of the promise, this doesn't give us the VALUE of the promise

// to get the VALUE of the promise, we use .then() , and these can be chained together
// we can use a .catch() , to catch any errors
myPromise
  .then((value) => {
    // console.log(value) // this will show "Resolved the promise!"
    return value + ' woohoo'
  })
  .then((newValue) => {
    console.log(newValue) // this will show "Resolved the promise! woohoo"
  })
  .catch((err) => {
    console.log(err)
  })

// We can simulate how waiting works, by using a time out (you don't need to do this IRL because you'll have to wait for the data anyway)

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('myNextPromise is resolved!')
  }, 3000)
})

myNextPromise.then((value) => {
  console.log(value)
})

myPromise.then((value) => {
  console.log(value)
})

// over here, the value for myPromise shows up first before we see the value for myNextPromise

// We have seen the Fulfilled and Rejected state... lets look at the Pending state

const users = fetch('https://jsonplaceholder.typicode.com/users')

console.log(users) // this shows Promise {<pending>} in the console

// but if you chain a .then() to the fetch... you get a ReadableStream... but we need JSON data, so we can call a JSON method
const diffUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    // console.log(response)
    return response.json()
  })
  .then((data) => {
    // console.log(data) // this will give us the 10 user objects
    data.forEach((user) => {
      console.log(user) // now we have the objects for EACH user
    })
  })
// BUUUUUUUUUUUUUUUUUUTTTTTTTTTTTTTTTTTTTTTTTTT  🍑 if we console log the users again...

console.log(diffUsers) // we still don't see the data, and we just see the same "Promise {<pending>}" before the above data actually displays in the console.... this is because JS doesn't wait for the promise, it just goes ahead and does this first then goes back to the previous function

// this could lead to a CHAIN of .then() , its not callback hell but it can still get messy.

// This leads to Async/Await

const myUsers = {
  userList: [],
}

// async function myAsyncFunc() {} // you can use this but the bottom syntax is more commonly seen

const myAsyncFunc = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonUserData = await response.json()

  // console.log(jsonUserData)
  return jsonUserData
}

const anotherFunc = async () => {
  const data = await myAsyncFunc()

  myUsers.userList = data
  console.log(myUsers.userList) // this is the same data from jsonUserData
}

anotherFunc()

console.log(myUsers.userList) // this will still show an empty array because it is OUTSIDE the async function

// Here's another example
const getAllUserEmails = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const jsonUserData = await response.json()

  const userEmailArry = jsonUserData.map((user) => {
    return user.email
  }) // map gives us an array of user emails

  console.log(userEmailArry)

  // we can then do something with it, like...
  postToWebPage(userEmailArry)
}

const postToWebPage = (data) => {
  console.log(data) // no async await is needed because it has already obtained the data
}

getAllUserEmails() //calling this function will call the postToWebPage function because the postToWebPage function is inside this function

// Lets look at the OTHER parameter for Fetch, which is an object
const getDadJokes = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET', // get is the default method, there are POST, PUT, DELETE etc.
    headers: {
      Accept: 'application/json', // this would be obtained by the .json()

      // Accept: 'text/pain', // this would be obtained by the .text()
    }, //When working with APIs or making HTTP requests, you'll need to refer to the API documentation or specifications to know which headers are supported and what values they expect. The choice of headers and their values will depend on the requirements of the specific API you're interacting with. The example you provided, using "Accept": "application/json", is common when you're expecting JSON-formatted responses from the server.
  }) // MDN shows a lot of other parameters in the object.
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

  const jsonJokeData = await response.json()
  // const textJokeData = await response.text()

  console.log(jsonJokeData)
  console.log(jsonJokeData.joke)
  // console.log(textJokeData)
}

getDadJokes()

const jokeObject = {
  id: 'Odhuv32jck9',
  joke: 'This is a joke.',
}

// We can also post data
const postData = async (jokeObj) => {
  const response = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jokeObj),
  })

  const jsonResponse = await response.json()

  console.log(jsonResponse)
}

postData(jokeObject)

// Lets look at another example

const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
  )
  const jsonResponse = await response.json()

  console.log(jsonResponse.value.joke)
}

requestJoke('Chuck', 'Norris')

// Lets look at extracting data into functions
// Maybe from a form

// We get the data from a form of some sort
const getDataFromForm = () => {
  const requestObj = {
    firstName: 'Bruce',
    lastName: 'Lee',
    categories: ['nerdy'],
  }

  return requestObj
}
// Make changes to the URL with the data
const buildReqUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}
// Handle the async function
const requestOthJoke = async (url) => {
  const response = await fetch(url)
  const jsonResponse = await response.json()
  const joke = jsonResponse.value.joke
  postJokeToPage(joke)
}
// Then post it to a page (but in our case we are just console logging cos we don't have a page to display this...)
const postJokeToPage = (joke) => {
  console.log(joke)
}

// Procedural "workflow" function, this is an async function because it is calling an async function to action

const processJokeReq = async()=>{
const requestData = getDataFromForm()
const requestUrl = buildReqUrl(requestData)
await requestOthJoke(requestUrl)
}

processJokeReq()