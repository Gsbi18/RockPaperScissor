var mePoint = Number(document.getElementById("meScores").textContent);
var enemyPoint = Number(document.getElementById("enemyScores").textContent);

function start() {
    document.getElementById("firstScene").style.display = 'none';
    document.getElementById("endScene").style.display = 'none';
    document.getElementById("gameScene").style.display = 'block';
    let seconds = 0;
    const h1 = document.getElementById("timer");
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

function chooseRock() {
    var me = 1;
    var enemy = Math.floor(Math.random() * 3) + 1;
    if (enemy == me) {
        document.getElementById("enemyRock").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyRock").style.display = 'none';
        }, 1000);

    }
    else if (enemy == 2) {
        enemyPoint++;
        document.getElementById("enemyPaper").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyPaper").style.display = 'none';
        }, 1000);
    }
    else {
        mePoint++;
        document.getElementById("enemyScissor").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyScissor").style.display = 'none';
        }, 1000);
    }
    document.getElementById("enemyScores").textContent = enemyPoint;
    document.getElementById("meScores").textContent = mePoint;
    if (mePoint == 5) {
        document.getElementById("gameScene").style.display = 'none';
        document.getElementById("endScene").style.display = 'block';
        document.getElementById("prompt").textContent = "Gratulálok te nyertél!!";
    }
    else if (enemyPoint == 5) {
        document.getElementById("gameScene").style.display = 'none';
        document.getElementById("endScene").style.display = 'block';
        document.getElementById("prompt").textContent = "Sajnalám vesztettél";
    }
    else start();

}
function choosePaper() {
    var me = 2;
    var enemy = Math.floor(Math.random() * 3) + 1;
    if (enemy == 2) {
        document.getElementById("enemyPaper").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyPaper").style.display = 'none';
        }, 1000);
    }
    else if (enemy == 3) {
        enemyPoint++;
        document.getElementById("enemyScissor").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyScissor").style.display = 'none';
        }, 1000);
    }
    else {
        mePoint++;
        document.getElementById("enemyRock").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyRock").style.display = 'none';
        }, 1000);
    }
    document.getElementById("enemyScores").textContent = enemyPoint;
    document.getElementById("meScores").textContent = mePoint;
    if (mePoint == 5) {
        document.getElementById("gameScene").style.display = 'none';
        document.getElementById("endScene").style.display = 'block';
        document.getElementById("prompt").textContent = "Gratulálok te nyertél!!";
    }
    else if (enemyPoint == 5) {
        document.getElementById("gameScene").style.display = 'none';
        document.getElementById("endScene").style.display = 'block';
        document.getElementById("prompt").textContent = "Sajnalám vesztettél";
    }
    else start();

}
function chooseScissor() {
    var me = 3;
    var enemy = Math.floor(Math.random() * 3) + 1;
    if (enemy == me) {
        document.getElementById("enemyScissor").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyScissor").style.display = 'none';
        }, 1000);
    }
    else if (enemy == 1) {
        enemyPoint++;
        document.getElementById("enemyRock").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyRock").style.display = 'none';
        }, 1000);
    }
    else {
        mePoint++;
        document.getElementById("enemyPaper").style.display = 'block';
        setTimeout(() => {
            document.getElementById("enemyPaper").style.display = 'none';
        }, 1000);
    }
    document.getElementById("enemyScores").textContent = enemyPoint;
    document.getElementById("meScores").textContent = mePoint;
    if (mePoint == 5) {
        document.getElementById("gameScene").style.display = 'none';
        document.getElementById("endScene").style.display = 'block';
        document.getElementById("prompt").textContent = 'Sajnalám vesztettél';
    }
    else if (enemyPoint == 5) {
        document.getElementById("gameScene").style.display = 'none';
        document.getElementById("endScene").style.display = 'block';
        document.getElementById("prompt").textContent = 'Sajnalám vesztettél';
    }
    else start();
}

