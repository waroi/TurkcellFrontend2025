const sum = (numberOne, numberTwo) => Number(numberOne) + Number(numberTwo);
const sub = (numberOne, numberTwo) => Number(numberOne) - Number(numberTwo);
const multiply = (numberOne, numberTwo) => Number(numberOne) * Number(numberTwo);
const divide = (numberOne, numberTwo) => Number(numberOne) / Number(numberTwo);
const mode = (numberOne, numberTwo) => Number(numberOne) % Number(numberTwo);
const power = (numberOne, numberTwo) => Number(numberOne) ** Number(numberTwo);

function getNumber(order, number) {
    number = prompt(order + " sayıyı giriniz:");
    while (isNaN(number)) {
      number = prompt("Lütfen sayısal bir değer giriniz:");
    }
    return number;
}

let numberOne = 0;
let numberTwo = 0;
let loopControl = true;

console.log(`
--------------------------------------------------------
Welcome to the calculator application
Please enter the numbers and the operation you want to do
Operations: +, -, *, /, %, **
--------------------------------------------------------`);

_ = prompt("Hesap makinesi uygulamasına hoşgeldiniz. Devam etmek için bir tuşa basınız.");

while (loopControl) {
  numberOne = getNumber("Birinci", numberOne);
  console.log("Number One: " + numberOne);
  let operation = prompt("İşlemi giriniz: +, -, *, /, %, **");
  console.log("Operation: " + operation);
  numberTwo = getNumber("İkinci", numberTwo);
  console.log("Number Two: " + numberTwo);

  switch (operation) {
    case "+":
      alert("Result: " + sum(numberOne, numberTwo));
      console.log("Result: " + sum(numberOne, numberTwo));
      break;
    case "-":
      alert("Result: " + sub(numberOne, numberTwo));
      console.log("Result: " + sub(numberOne, numberTwo));
      break;
    case "*":
      alert("Result: " + multiply(numberOne, numberTwo));
      console.log("Result: " + multiply(numberOne, numberTwo));
      break;
    case "/":
      alert("Result: " + divide(numberOne, numberTwo));
      console.log("Result: " + divide(numberOne, numberTwo));
      break;
    case "%":
      alert("Result: " + mode(numberOne, numberTwo));
      console.log("Result: " + mode(numberOne, numberTwo));
      break;
    case "**":
      alert("Result: " + power(numberOne, numberTwo));
      console.log("Result: " + power(numberOne, numberTwo));
      break;
    default:
      alert("Hatalı işlem");
      break;
  }

  loopControl = prompt("Devam etmek istiyor musunuz? (e/h)") === "e";
}
