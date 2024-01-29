let userScore = 0;
let catScore = 0;
const choices = document.querySelectorAll(".choice");

const userScoreP = document.querySelector("#user-score");
const catScoreP = document.querySelector("#cat-score");

const msg = document.querySelector("#msg");

const genCatChoice = () => {
    const opt = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return opt[idx];
};

const drawGame = () =>{
    // console.log("game was draw.");
    msg.innerText = "game was draw, play again!";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, catChoice) => {
    if(userWin){
        userScore++;
        userScoreP.innerText = userScore;
        // console.log("you won!");
        msg.innerText = `you win! your ${userChoice} beats ${catChoice}.`;
        msg.style.backgroundColor = "lightgreen";
        msg.style.color = "white";
        celebrate();
    }else{
        catScore++;
        catScoreP.innerText = catScore;
        // console.log("you lost.");
        msg.innerText = `you lose :( ${catChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "indianred";
        msg.style.color = "white";
    }
};

const game = (userChoice) =>{
    console.log("user choice: ", userChoice);
    const catChoice = genCatChoice();
    console.log("cat choice: ", catChoice);

    if(userChoice==catChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){ //s //p
            userWin = catChoice === "paper" ? false : true;
        }else if(userChoice == "paper"){ //r //s
            userWin = catChoice === "scissors" ? false : true;
        }else{
            userWin = catChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, catChoice);
    }
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        game(userChoice);
    });
});

/*fireworks part*/

function celebrate() {
    const fireworksContainer = document.getElementById('fireworks-container');

    //make the fireworks container visible
    fireworksContainer.style.display = 'block';

    for (let i = 0; i < 30; i++) {
        createFirework();
    }

    //hide fireworks after a delay
    setTimeout(() => {
        fireworksContainer.style.display = 'none';
    }, 3000); //hide
}

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    document.getElementById('fireworks-container').appendChild(firework);

    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    firework.style.left = posX + 'px';
    firework.style.top = posY + 'px';

    const color = getRandomColor();
    firework.style.backgroundColor = color;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
