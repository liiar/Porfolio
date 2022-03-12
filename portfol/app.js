window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
function iShoot(enemy) {
    enemy.classList.add("dead");
    if (!livingEnemies().length) {
        alert("You win !");
        window.location.reload();
    }
}
function enemyAttacksMe(enemy) {
    enemy.classList.add("showing");
    setTimeout(() => {
        enemyShootsMe(enemy)
    }, 1000);
    setTimeout(() => {
        enemy.classList.remove("showing");
    }, 3000);

}

function enemyShootsMe(enemy) {


    if (!enemy.classList.contains("dead")) {
        enemygunsound.play();
        enemy.classList.add("shooting");
        updateHealthPoints(healthPoints - 20);

        setTimeout(() => {
            enemy.classList.remove("shooting");
        }, 20);
    }
}
function livingEnemies() {
    return document.querySelectorAll(".enemy:not(.dead)");
}

function randomEnemyAttacks() {
    var randomEnemyNo = Math.random() * livingEnemies().length;
    randomEnemyNo = Math.floor(randomEnemyNo);
    var enemy = livingEnemies()[randomEnemyNo];

    var randomDelay = Math.random() * 100 + 1000;

    setTimeout(() => {
        enemyAttacksMe(enemy);
        randomEnemyAttacks();
    }, randomDelay);
}
var healthPoints = 100;

function updateHealthPoints(points) {
    healthPoints = points;
    var barredevie = document.querySelector("#barredevie");

    barredevie.style.width = points + "%";
    if (healthPoints < 1) {
        alert("GameOver!");
        window.location.reload();
    }
} 
function newgame() {
    randomEnemyAttacks();
    document.querySelector("button").style.display ="none";
    music.play();
}
var mygunsound = new Audio ("ak47.mp3");
mygunsound.volume=0.1;

var enemygunsound = new Audio ("ki.mp3");
enemygunsound.volume=0.3;

var music = new Audio("dbz.mp3");
music.volume=0.09;
music.loop = true;