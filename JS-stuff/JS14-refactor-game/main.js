// Interactive game refactored with while loop and array
let playGame = confirm('Lets play rock, paper, scissors')

if (playGame) {
  while (playGame) {
    const playerChoice = prompt('Please enter rock, paper, or scissors')

    if (playerChoice || playerChoice === '') {
      const playerOne = playerChoice.trim().toLowerCase()
      if (
        playerOne === 'rock' ||
        playerOne === 'paper' ||
        playerOne === 'scissors'
      ) {
        const computerChoice = Math.floor(Math.random() * 3 + 1)
        const compChoiceArray = ['rock', 'paper', 'scissors']
        const computer = compChoiceArray[computerChoice]

        const result =
          playerOne === computer
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nTie Game`
            : playerOne === 'rock' && computer === 'paper'
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins`
            : playerOne === 'paper' && computer === 'scissors'
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins`
            : playerOne === 'scissors' && computer === 'rock'
            ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins`
            : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Wins!`

        alert(result)

        playGame = confirm('Would you like to play again?')
        if (!playGame) alert('Ok, thanks for playing.')
        continue
      } else {
        alert("You didn't enter rock, paper, or scissors")
        continue
      }
    } else {
      alert('I guess you changed your mind. Maybe next time')
      break
    }
  }
} else {
  alert('Ok, maybe next time')
}
