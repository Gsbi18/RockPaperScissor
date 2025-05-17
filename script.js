var mePoint = Number(document.getElementById("meScores").textContent);
var enemyPoint = Number(document.getElementById("enemyScores").textContent);

function start() {
    document.getElementById("firstScene").style.display = 'none';
    document.getElementById("endScene").style.display = 'none';
    document.getElementById("gameScene").style.display = 'block';

    const images = document.getElementsByClassName("pics");
    
    for (let img of images) {
        img.style.pointerEvents = "none";
        img.style.opacity = "0.5"; 
    }
    setTimeout(() => {
        for (let img of images) {
            img.style.pointerEvents = "auto";
            img.style.opacity = "1"; 
        }
    }, 1000);

}
function reStart() {
    mePoint = 0;
    enemyPoint = 0;
    document.getElementById("enemyScores").textContent = enemyPoint;
    document.getElementById("meScores").textContent = mePoint;
    start();

}

// Rock - 1 , Paper - 2 , Scissor - 3
function playRound(playerChoice, enemyChoice) {
    const images = {
        1: "enemyRock",
        2: "enemyPaper",
        3: "enemyScissor"
    };

    if (enemyChoice === playerChoice) {
        document.getElementById(images[enemyChoice]).style.display = 'block';
        setTimeout(() => {
            document.getElementById(images[enemyChoice]).style.display = 'none';
        }, 1000);
    } else if ((playerChoice === 1 && enemyChoice === 2) || 
               (playerChoice === 2 && enemyChoice === 3) || 
               (playerChoice === 3 && enemyChoice === 1)) {
        enemyPoint++;
        document.getElementById(images[enemyChoice]).style.display = 'block';
        setTimeout(() => {
            document.getElementById(images[enemyChoice]).style.display = 'none';
        }, 1000);
    } else {
        mePoint++;
        document.getElementById(images[enemyChoice]).style.display = 'block';
        setTimeout(() => {
            document.getElementById(images[enemyChoice]).style.display = 'none';
        }, 1000);
    }

    // Frissítjük a pontszámokat
    document.getElementById("enemyScores").textContent = enemyPoint;
    document.getElementById("meScores").textContent = mePoint;

    checkGameEnd();
}
function checkGameEnd() {
    if (mePoint === 5) {
        endGame("Gratulálok te nyertél!!");
    } else if (enemyPoint === 5) {
        endGame("Sajnalám vesztettél");
    } else {
        start(); // Ha nincs vége, újraindítjuk a játékot
    }
}
function endGame(message) {
    document.getElementById("gameScene").style.display = 'none';
    document.getElementById("endScene").style.display = 'block';
    document.getElementById("prompt").textContent = message;
}
function chooseRock() {
    var enemy = Math.floor(Math.random() * 3) + 1;
    playRound(1, enemy); // Rock választás
}

function choosePaper() {
    var enemy = Math.floor(Math.random() * 3) + 1;
    playRound(2, enemy); // Paper választás
}

function chooseScissor() {
    var enemy = Math.floor(Math.random() * 3) + 1;
    playRound(3, enemy); // Scissor választás
}
