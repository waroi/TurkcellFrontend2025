var screen = document.getElementById("screen");

var AC = document.getElementById("AC"); //
var square = document.getElementById("square");
var del = document.getElementById("del"); //
var division = document.getElementById("division");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var multiply = document.getElementById("multiply");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var subtract = document.getElementById("subtract");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var plus = document.getElementById("plus");
var zero = document.getElementById("zero");
var bracket = document.getElementById("bracket");
var comma = document.getElementById("comma");
var equal = document.getElementById("equal"); //
var lB = 0;
var rB = 0;

var priority = {
  c: 1,
  t: 2,
  x: 3,
  b: 4,
  l: 0,
  r: 0,
};

bracketStack = [];

var arrayToSolve = [];

var operatorStack = [];
var outputQueue = [];

function getScreen() {
  var screenReplaced = screen.textContent.trim()
    .replaceAll("(", "l")
    .replaceAll(")", "r")
    .replaceAll("×", "x")
    .replaceAll("÷", "b")
    .replaceAll("+", "t")
    .replaceAll("-", "c");
  var screenSplitedArray = screenReplaced.split(
    /(?=[\srlxbtc]+)|(?<=[\srlxbtc]+)/
  );
  return screenSplitedArray;
}

function countOccurrences(arr, val) {
  return arr.filter((a) => a == val).length;
}

// Bir sonraki derse refactor edilecek
function bracketFinder(arr) {
  let index = 0;
  let flag = true;
  lB = arr.indexOf("l");
  arr.forEach((element) => {
    index++;
    if (element == "l") {
      bracketStack.push(element);
    } else if (element == "r") {
      bracketStack.pop();
      if (index != 0 && bracketStack.length == 0 && flag == true) {
        rB = index;
        flag = false;
      }
    }
  });
  solve = arr.slice(lB + 1, rB - 1);
  arr.splice(lB, solve.length + 2, solve);
  return arr;
}

function parseLoop(arr) {
  if (!Array.isArray(arr)) return arr;
  while (arr.filter((val) => val == "l").length != 0) {
    arr = bracketFinder(arr);
  }
  arr = arr.map(parseLoop);

  return arr;
}

function parser(arr) {
  while (arr.filter((val) => val == "l").length != 0) {
    arr = bracketFinder(arr);
  }
  arr = parseLoop(arr);
  return arr;
}

function hasSubArray(arr) {
  let boolean = false;
  arr.forEach((element) =>
    Array.isArray(element) == true ? (boolean = true) : null
  );
  return boolean;
}

function evaluateExpression(arr) {
  if (!Array.isArray(arr)) return arr;

  arr = arr.map(evaluateExpression);

  return tokenPrioritySolver(arr);
}

function tokenUser(arr, token) {
  tokenIndex = arr.indexOf(token);
  num1 = parseFloat(arr[tokenIndex - 1]);
  num2 = parseFloat(arr[tokenIndex + 1]);
  let result = 0;
  let newArr = [];

  switch (token) {
    case "t":
      result = toplama(num1, num2);
      break;
    case "c":
      result = cikarma(num1, num2);
      break;
    case "x":
      result = carpma(num1, num2);
      break;
    case "b":
      result = bolme(num1, num2);
      break;
  }
  if (arr.length != 3) {
    newArr = arr
      .slice(0, tokenIndex - 1)
      .concat(arr.slice(tokenIndex + 1, arr.length));
  } else {
    newArr = result;
  }
  newArr[tokenIndex - 1] = result;

  return newArr;
}

function tokenPrioritySolver(arr) {
  let tokenIndex = 0;
  let tokenArr = [];
  while (countOccurrences(arr, "x")) {
    tokenIndex = arr.indexOf("x");
    tokenArr = [arr[tokenIndex - 1], "x", arr[tokenIndex + 1]];
    arr.splice(tokenIndex - 1, 3, tokenUser(tokenArr, "x"));
  }
  while (countOccurrences(arr, "b")) {
    tokenIndex = arr.indexOf("b");
    tokenArr = [arr[tokenIndex - 1], "b", arr[tokenIndex + 1]];
    arr.splice(tokenIndex - 1, 3, tokenUser(tokenArr, "b"));
  }
  while (countOccurrences(arr, "c")) {
    tokenIndex = arr.indexOf("c");
    tokenArr = [arr[tokenIndex - 1], "c", arr[tokenIndex + 1]];
    arr.splice(tokenIndex - 1, 3, tokenUser(tokenArr, "c"));
  }
  while (countOccurrences(arr, "t")) {
    tokenIndex = arr.indexOf("t");
    tokenArr = [arr[tokenIndex - 1], "t", arr[tokenIndex + 1]];
    arr.splice(tokenIndex - 1, 3, tokenUser(tokenArr, "t"));
  }
  return arr;
}

equal.addEventListener("click", () => {
  let sc = getScreen();
  console.log(evaluateExpression(parser(sc)))
  screen.textContent = evaluateExpression(parser(sc));
});

square.addEventListener("click", () => {
  // screen.textContent += square.textContent;
});
division.addEventListener("click", () => {
  screen.textContent += "÷";
});
one.addEventListener("click", () => {
  screen.textContent += "1";
});
two.addEventListener("click", () => {
  screen.textContent += "2";
});
three.addEventListener("click", () => {
  screen.textContent += "3";
});
multiply.addEventListener("click", () => {
  screen.textContent += "×";
});
four.addEventListener("click", () => {
  screen.textContent += "4";
});
five.addEventListener("click", () => {
  screen.textContent += "5";
});
six.addEventListener("click", () => {
  screen.textContent += "6";
});
subtract.addEventListener("click", () => {
  screen.textContent += "-";
});
seven.addEventListener("click", () => {
  screen.textContent += "7";
});
eight.addEventListener("click", () => {
  screen.textContent += "8";
});
nine.addEventListener("click", () => {
  screen.textContent += "9";
});
plus.addEventListener("click", () => {
  screen.textContent += "+";
});
zero.addEventListener("click", () => {
  screen.textContent += "0";
});
comma.addEventListener("click", () => {
  screen.textContent += ",";
});

bracket.addEventListener("click", () => {
  bracketLeft = screen.textContent.split("(").length - 1;
  bracketRight = screen.textContent.split(")").length - 1;

  if (bracketLeft > bracketRight) {
    screen.textContent += ")";
  } else {
    screen.textContent += "(";
  }
});

del.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(0, -1);
});

function toplama(number1, number2) {
  return number1 + number2;
}

function cikarma(number1, number2) {
  return number1 - number2;
}

function bolme(number1, number2) {
  return number1 / number2;
}

function carpma(number1, number2) {
  return number1 * number2;
}

function removeLastMatch(arr, val) {
  let lastIndex = arr.lastIndexOf(val);
  if (lastIndex !== -1) {
    arr.splice(lastIndex, 1);
  }
  return arr;
}

AC.addEventListener("click", () => {
  screen.textContent = "";
});
