// Switch statements

// syntax
// switch (expression OR value) {
//   case choice1:
//     // run code
//     break;
//   case choice2:
//     // run this different code
//     break;

//     // add more cases that are applicable

//   default:
//     // run this code if no other case match
//     // no need for a break
// }

switch ('2') {
  case 1:
    console.log(1)
    break
  case 2:
    console.log(2)
    break
  case 3:
    console.log(3)
    break

  default:
    console.log('No Match')
}
// this would show "no match" because we have a string of 2, switch cases needs exact matches

switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log(1)
    break
  case 2:
    console.log(2)
    break
  case 3:
    console.log(3)
    break

  default:
    console.log('No Match')
}

// this would console log either 1, 2, or 3 at random, but would never trigger "No Match"

switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1)
    break
  case 2:
    console.log(2)
    break
  case 3:
    console.log(3)
    break

  default:
    console.log('No Match')
}

// in THIS example, there may be instances where "No Match" is triggered

let playerOne = 'rock'
let computer = 'scissors'

switch (playerOne) {
  case computer:
    console.log('Tie Game!')
    break

  case 'rock':
    if (computer === 'paper') {
      console.log('Computer Wins')
    } else {
      console.log('PlayerOne Wins!')
    }
    break

  case 'paper':
    if (computer === 'scissors') {
      console.log('Computer Wins')
    } else {
      console.log('PlayerOne Wins!')
    }
    break

  default:
    if (computer === 'rock') {
      console.log('Computer Wins')
    } else {
      console.log('PlayerOne Wins!')
    }
}

// in this example, it would console log "PlayerOne Wins!"