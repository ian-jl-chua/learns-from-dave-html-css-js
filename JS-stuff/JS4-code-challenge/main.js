// Code challenge

// Code returning a random letter from your name.
const myName = 'IanWinchester'
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))

// This bottom part can be used but it would be used inside a function, which means a function needs to be created
// let alphabets = name.replace(/[^a-zA-Z]/g, '');
// let randomIndex = Math.floor(Math.random() * alphabets.length);

// return alphabets[randomIndex]
