// Using functions to refactor code
const initGame = () => {
  const startGame = confirm('Shall we play rock, paper, scissors?')
  startGame ? playGame() : alert('Ok, maybe next time.')
}

function playGame() {
  while (true) {
    let playerChoice = getPlayerChoice()
    playerChoice = formatPlayerChoice(playerChoice)

    if (playerChoice === '') {
      invalidChoice()
      continue
    }

    if (!playerChoice) {
      notPlaying()
      break
    }

    playerChoice = evaluatePlayerChoice(playerChoice)
    if (!playerChoice) {
      invalidChoice()
      continue
    }

    const computerChoice = getCompChoice()
    const result = determineWinner(playerChoice, computerChoice)
    displayResult(result)

    if (askToPlayAgain()) {
      continue
    } else {
      thanksForPlaying()
      break
    }
  }
}

const getPlayerChoice = () => {
  return prompt('Please enter rock, paper, or scissors')
}

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice) {
    return playerChoice.trim().toLowerCase()
  } else {
    return false
  }
}

const invalidChoice = () => {
  alert("You didn't choose rock, paper, or scissors")
}

const notPlaying = () => {
  alert('Maybe next time.')
}

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === 'rock' ||
    playerChoice === 'paper' ||
    playerChoice === 'scissors'
  ) {
    return playerChoice
  } else {
    return false
  }
}

const getCompChoice = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1)
  const compChoiceArray = ['rock', 'paper', 'scissors']
  return compChoiceArray[randomNum]
}

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? `Your Choice: ${player}\nComputer: ${computer}\nTie Game`
      : player === 'rock' && computer === 'paper'
      ? `Your Choice: ${player}\nComputer: ${computer}\nComputer Wins`
      : player === 'paper' && computer === 'scissors'
      ? `Your Choice: ${player}\nComputer: ${computer}\nComputer Wins`
      : player === 'scissors' && computer === 'rock'
      ? `Your Choice: ${player}\nComputer: ${computer}\nComputer Wins`
      : `Your Choice: ${player}\nComputer: ${computer}\nYou Win!`

  return winner
}

const displayResult = (result) => {
  alert(result)
}

const askToPlayAgain = () => {
  confirm('Play again?')
}

const thanksForPlaying = () => {
  alert('Ok, thanks for playing :)')
}

initGame()
