let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// to get individual choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        gamePlay(userChoice);
     })
})

//comp generated choice
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const gamePlay = (userChoice) => {
    console.log("user choice is", userChoice);

    const compChoice = genCompChoice();
    console.log("computer choice is", compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "scissor") {
            userWin = compChoice === "rock" ? false : true;
        } else {
            userWin = compChoice === "scissor" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const gameDraw = () => {
    console.log("The game was draw");
    msgPara.innerText = "The game was draw";
    msgPara.style.backgroundColor = "rgb(223, 223, 3)";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you won");
        msgPara.innerText = `You Won!. (your ${userChoice} beats computers ${compChoice})`;
        msgPara.style.backgroundColor = "chartreuse";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lost");
        msgPara.innerText = `You Lost. (your ${compChoice} beats computers ${userChoice})`;
        msgPara.style.backgroundColor = "red";
    }
}


