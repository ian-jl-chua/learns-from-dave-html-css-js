// Web storage API
// It is not part of the DOM, it refers to the Window API
// Available to JS via the global variable: window

// we do not need to type "window" in, it is implied

// both of these are the same
// window.alert("Ok!")
// alert("Ok!")

// anything that requires window, we do not need to type eg

console.log(window.location)
// is the same as
console.log(location)

// now we look at local storage and session storage
const myArr = ['bleed', 'sleep', 'code']

const myObj = {
  name: 'Ian',
  activities: ['bleed', 'sleep', 'code'],
  logName: function () {
    console.log(this.name)
  },
}

// sessionStorage:

// Data stored in sessionStorage is specific to a single browsing session. It's tied to a specific tab or window and is cleared when the tab or window is closed.
// The data is available for the duration of the page session, which means it remains accessible while the tab or window is open. When the tab is closed, the stored data is deleted.
// sessionStorage is often used for temporary data that is needed only during a specific user interaction or browsing session.
// It has a smaller storage limit compared to localStorage, usually around 5-10MB.
// Just like localStorage, data stored in sessionStorage is only accessible within the same domain.
// Since the data is tied to a specific session, sessionStorage is useful for scenarios where you want to maintain data during a single user session without cluttering the browser's storage with long-term data.

// localStorage:

// Data stored in localStorage persists even after the browser is closed and re-opened.
// The stored data has no expiration time and remains until it's explicitly removed by the user or cleared programmatically.
// It's often used to store user preferences, settings, and other data that should persist across sessions.
// localStorage has a larger storage limit compared to sessionStorage, usually around 5-10MB.
// Data stored in localStorage is accessible across multiple tabs and windows of the same domain.
// The data in localStorage remains available until explicitly removed, so it's suitable for long-term storage.

// In summary, the main difference between localStorage and sessionStorage lies in the scope and persistence of the stored data. localStorage keeps the data across browser sessions and tabs, making it suitable for long-term storage, while sessionStorage is limited to a single session and is useful for temporary storage that's tied to the current tab or window. Choose the one that fits your use case based on the desired lifespan and accessibility of the data.

sessionStorage.setItem('mySessionStore', myObj)

const mySessionData = sessionStorage.getItem('mySessionStore')
console.log(mySessionData) //returns [object Object]

// but if you do it with the array

sessionStorage.setItem('mySessionStore2', myArr)
const mySessionData2 = sessionStorage.getItem('mySessionStore2')
console.log(mySessionData2) //returns bleed,sleep,code
console.log(typeof mySessionData2) //returns string

// this is string data. SessionStorage or LocalStorage or Webstorage API only store string data, if it isn't string data, it will attempt to convert it to string data

// we can store the object as a JSON, but bear in mind any functions in the object will be lost
sessionStorage.setItem('mySessionStore3', JSON.stringify(myObj)) // this converts it to a string {"name": 'Ian', "activities": ['bleed', 'sleep', 'code']}

const mySessionData3 = JSON.parse(sessionStorage.getItem('mySessionStore3'))
console.log(mySessionData3) //returns object {name: 'Ian', activities: ['bleed', 'sleep', 'code']}

// same can be done for our array
sessionStorage.setItem('mySessionStore4', JSON.stringify(myArr)) 

const mySessionData4 = JSON.parse(sessionStorage.getItem('mySessionStore4'))
console.log(mySessionData4) //returns array ['bleed', 'sleep', 'code']

// items can be removed by using 
sessionStorage.removeItem('mySessionSore4')

// you can also use sessionStorage.clear() but this clears EVERYTHING in the session. Using removeItem is more specific

// the same can be done for localStorage
// using localStorage.setItem() and localStorage.removeItem() or localStorage.clear()

// we can also return the key by saying localStorage.key(0), this returns the localStorage key at index position 0

// to find out how many items are in localStorage, we can use localStorage.length