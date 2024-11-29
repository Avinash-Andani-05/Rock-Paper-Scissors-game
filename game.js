let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".game");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// showDraw function
function showdraw() {
    message.innerText = "This is Draw";
    message.style.backgroundColor = "rgb(47, 4, 126, 0.85)";
    userScore + 1;
    compScore + 1;
}
// showWin function
function showWin(userWin) {
    if (userWin) {
        userScore++;
        message.innerText = "You Win";
        message.style.backgroundColor = "Green";
        userScorePara.innerText = userScore;
    }
    else {
        compScore++;
        message.innerText = "You Lost";
        message.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}
// function for computer choice
const getCompChoice = () => {
    const allChoices = ["rock", "paper", "scissors"];
    return allChoices[Math.floor(Math.random() * 3)];
}

// function playgame
const playgame = (userChoice) => {
    const compChoice = getCompChoice();
    // main logic
    if (userChoice === compChoice) {
        showdraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // remaining paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // reaming rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // remaing rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin);
    }
}

// MainLogin of the program
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = (choice.getAttribute("id").toString());
        playgame(userChoice);
    })
})