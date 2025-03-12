var pause = false;

pause = !confirm("Start!");

const map = document.querySelector("main");

const width = 30;
const height = 20;

var snake = [
  [0, 3],
  [0, 2],
  [0, 1],
  [0, 0],
];

var direction = "right";
var lastDirection;

function calc() {
  if (pause) return;

  let head = [snake[0][0], snake[0][1]];
  switch (direction) {
    case "up":
      head[1] = head[1] - 1;
      if (head[1] < 0) head[1] = height - 1;
      break;
    case "right":
      head[0] = (head[0] + 1) % width;
      break;
    case "down":
      head[1] = (head[1] + 1) % height;
      break;
    case "left":
      head[0] = head[0] - 1;
      if (head[0] < 0) head[0] = width - 1;
      break;
  }

  snake.unshift(head);

  let tile = getTile(head[0], head[1]).classList;

  if (tile.contains("snake")) {
    alert("Game over!");
    pause = true;
  } else if (tile.contains("apple")) {
    tile.remove("apple");
    let apple = createApple();
    getTile(apple[0], apple[1]).classList.add("apple");
  } else {
    let back = snake.pop();
    getTile(back[0], back[1]).classList.remove("snake");
  }

  render();

  lastDirection = direction;
}

function render() {
  for (let index = 0; index < snake.length; index++) {
    getTile(snake[index][0], snake[index][1]).classList.add("snake");
  }
}

document.addEventListener("keypress", (event) => {
  switch (event.code) {
    case "KeyW":
      if (lastDirection != "down") direction = "up";
      break;
    case "KeyA":
      if (lastDirection != "right") direction = "left";
      break;
    case "KeyS":
      if (lastDirection != "up") direction = "down";
      break;
    case "KeyD":
      if (lastDirection != "left") direction = "right";
      break;
  }
});

let first = createApple();
getTile(first[0], first[1]).classList.add("apple");

setInterval(calc, 100);

function getTile(x, y) {
  return map.children[x + y * width];
}

function createApple() {
  if (snake.length == width * height - 1) {
    alert("You win!");
    pause = true;
  }

  let invalid = true;
  let apple;
  while (invalid) {
    apple = [
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * height),
    ];
    if (
      !snake.filter((tile) => tile[0] == apple[0] && tile[1] == apple[1]).length
    )
      invalid = false;
  }

  return apple;
}
