var playGroundMatrix = Array(20).fill(null).map(() => Array(20).fill(null))
var snakeMatrix = [[3, 9], [2, 9], [1, 9], [0, 9]]
var borders = [];
var bait = [10, 10]
var playGroundLocs = []
var baitSpace = []
var moveDirection = "Down"
var gameOver = false
var feedCount = 0;
var speed = 400;
var percision = 0;
var speedBar = document.getElementById("speedBar")
var cellBar = document.getElementById("cellBar")

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        playGroundMatrix[i][j] = document.getElementsByClassName("rowASC")[i].children[j]
        playGroundLocs.push([i, j])
    }
}

snakeGenerator()
playGroundMatrix[bait[0]][bait[1]].style.backgroundColor = "blue";

function snakeGenerator() {
    snakeMatrix.forEach(
        (el) => {
            try { playGroundMatrix[el[0]][el[1]].style.backgroundColor = "red"; }
            catch (err) {
                gameOver = true
                alert("Game Over")
            }
        }
    )
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function randomBaitGenerator() {
    baitSpace = []
    playGroundMatrix.forEach((row, i) => {
        row.forEach((col, j) => {
            if (!snakeMatrix.some((el) => { return el[0] === i && el[1] === j })) {
                baitSpace.push([i, j])
            }
        })
    })
    bait = baitSpace[Math.floor(Math.random() * baitSpace.length)]
    playGroundMatrix[bait[0]][bait[1]].style.backgroundColor = "blue"
}


document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            moveDirection = "Left"
            break;
        case "ArrowRight":
            moveDirection = "Right"
            break;
        case "ArrowUp":
            moveDirection = "Up"
            break;
        case "ArrowDown":
            moveDirection = "Down"
            break;
    }
})

restartBtn = document.getElementById("restartBtn")



function movement() {
    function afterMoveWhite() {
        snakeMatrix.forEach((el) => {
            playGroundMatrix[el[0]][el[1]].style.backgroundColor = "white"
        })
    }
    function snakeHitSelfControl(x,y) {
        if (snakeMatrix.some((el) => { return el[0] === snakeMatrix[0][0] + x && el[1] === snakeMatrix[0][1] + y})
        ) { gameOver = true }
    }
    function snakeMoveForward(x, y) {
        snakeMatrix.unshift([snakeMatrix[0][0] + x, snakeMatrix[0][1] + y]);
        snakeMatrix.pop()
    }
    function moveActions(x, y) {
        afterMoveWhite()
        snakeHitSelfControl(x,y)
        snakeMoveForward(x, y)
    }

    switch (moveDirection) {
        case "Down":
            moveActions(+1, 0)
            break;
        case "Up":
            moveActions(-1, 0)
            break;
        case "Left":
            moveActions(0, -1)
            break;
        case "Right":
            moveActions(0, +1)
            break;
    }
}

function speedCalculator() {
    if (feedCount <= 6) {
        feedCount++;
        speed -= 50
        percision = ((300 - speed) / 300) * 100
    }
}


function myLoop() {
    let a = 0;
    setTimeout(function () {
        movement();
        snakeGenerator();
        if (gameOver === true) {
            return alert("gameOver")
        }
        else if (arraysEqual(snakeMatrix[1], bait)) {
            randomBaitGenerator()
            speedCalculator()
            snakeMatrix.push(snakeMatrix[0])
            speedBar.style.width = `${percision}%`
            console.log("batispacelength : ",baitSpace.length)
            cellBar.style.width = `${(400-baitSpace.length)/400}%`
        }
        a++;
        if (a < 400) {
            myLoop();
        }
    }, Math.max(100, speed))
}

myLoop();