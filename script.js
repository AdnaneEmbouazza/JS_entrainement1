let scoreOrdi = 0
let scoreJoueur = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if(choice == 0){
        console.log("the Computer chose the rock")
    }
    else if (choice == 1){
        console.log("the computer chose the scisors")
    }
    else if (choice == 2 ){
        console.log(" the computer chose the paper")
    }
    return choice
}

function letPlayerChoice() {
    let ChoiceUser = window.prompt("quel est ton choix ? (rock / paper / scissors)") 
    console.log("you chose the " + ChoiceUser)
    return ChoiceUser
}

function Jeux() {
    while (scoreJoueur < 5 && scoreOrdi < 5){
        let ComputerChoice = getComputerChoice()
        let UserChoice = letPlayerChoice()

        if (ComputerChoice == 0){
            if (UserChoice == "paper"){
                console.log("it's a WIN !!!")
                scoreJoueur ++ 
            }
            else if (UserChoice == "rock"){
                console.log("it's a DRAW")
            }
            else if (UserChoice == "scissors"){
                console.log("it's a lose")
                scoreOrdi ++
            }
        }

        if (ComputerChoice == 1){
            if (UserChoice == "rock"){
                console.log("it's a WIN !!!")
                scoreJoueur ++
            }
            else if (UserChoice == "scissors"){
                console.log("it's a DRAW")
            }
            else if (UserChoice == "paper"){
                console.log("it's a lose")
                scoreOrdi ++
            }
        }

        if (ComputerChoice == 2){
            if (UserChoice == "scissors"){
                console.log("it's a WIN !!!")
                scoreJoueur ++
            }
            else if (UserChoice == "paper"){
                console.log("it's a DRAW")
            }
            else if (UserChoice == "rock"){
                console.log("it's a lose")
                scoreOrdi ++
            }
        }
        console.log("your score is " + scoreJoueur)
        console.log("the computer score is " + scoreOrdi)
    }
}

Jeux()