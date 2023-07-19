// Interactive game

let playGame = confirm('Lets play rock, paper, scissors')

if (playGame) {
  let playerChoice = prompt('Please enter rock, paper, or scissors')

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase()
    if (
      playerOne === 'rock' ||
      playerOne === 'paper' ||
      playerOne === 'scissors'
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1)
      let computer =
        computerChoice === 1
          ? 'rock'
          : computerChoice === 2
          ? 'paper'
          : 'scissors'

      let result =
        playerOne === computer
          ? 'Tie Game'
          : playerOne === 'rock' && computer === 'paper'
          ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins`
          : playerOne === 'paper' && computer === 'scissors'
          ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins`
          : playerOne === 'scissors' && computer === 'rock'
          ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins`
          : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Wins!`

      alert(result)

      let playAgain = alert('Would you like to play again?')
      playAgain ? location.reload() : alert('Ok thanks for playing.')
      
    } else {
      alert("You didn't enter rock, paper, or scissors")
    }
  } else {
    alert('I guess you changed your mind. Maybe next time')
  }
} else {
  alert('Ok, maybe next time')
}
