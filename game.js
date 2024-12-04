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
    // userScore++;
    // compScore++;
}

// showWin function
function showWin(userWin) {
    if (userWin) {
        userScore++;
        message.innerText = "You Win";
        message.style.backgroundColor = "Green";
        userScorePara.innerText = userScore;
    } else {
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
    // Hide all options
    choices.forEach(option => option.classList.add('hidden'));
    // selected options
    document.querySelector(`#${userChoice}`).classList.remove('hidden');
    document.querySelector(`#${compChoice}`).classList.remove('hidden');
    // Adding styles for the selected options
    showUserOption(userChoice);
    showCompOPtion(compChoice);
    // Main logic
    if (userChoice === compChoice) {
        showdraw();
    } else {
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
    // Reset styles after a delay
    setTimeout(() => {
        choices.forEach(option => {
            option.classList.remove('hidden');
            option.style.transform = "scale(1)";
            option.style.backgroundColor = "";
        });
        message.style.backgroundColor = "";
    }, 1000);
}

// Main Logic of the program
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = (choice.getAttribute("id"));
        let userShow = document.querySelector(`#${userChoice}`);
        console.log(userShow.getAttribute("id"));
        playgame(userChoice);
    });
});

function showUserOption(userChoice) {
    let userShow = document.querySelector(`#${userChoice}`);
    userShow.style.transform = "scale(1.5)";
    userShow.style.backgroundColor = "transparent";
    userShow.style.transition = "0.2s";
    userShow.style.margin = '0.75em';
}

function showCompOPtion(compOP) {
    let compShow = document.querySelector(`#${compOP}`);
    compShow.style.transform = "scale(1.5)";
    compShow.style.backgroundColor = "transparent";
    compShow.style.transition = "0.2s";
    compShow.style.margin = '0.75em';

}
