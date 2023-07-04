const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
let myPoints = 0
let machinePoints = 0
const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) { result.innerHTML = "Deu Empate!" }

    else if (human === 'rock' && machine === 'scissors' ||
        human === 'paper' && machine === 'rock' ||
        human === 'scissors' && machine === 'paper') {
        myPoints++
        result.innerHTML = "Você Ganhou!"

        humanScore.innerHTML = myPoints

    }

    else {
        machinePoints++
        result.innerHTML = "Você Perdeu!"
        machineScore.innerHTML = machinePoints

    }



}