const sum = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const divide = (number1, number2) => number1 / number2;
const multiply = (number1, number2) => number1 * number2;
const mod = (number1, number2) => number1 % number2;

const enterNumberFunct = () => {
do {
    number1 = Number(prompt("Enter the first number: "));
    number2 = Number(prompt("Enter the second number: "));
}
    while(number1 === NaN || number2 === NaN)
}

loopControl = true;
console.log("welcome to the calculator");
console.log("Example: Operation: '+', number1: 5, number2: 3, result: 8");


function calculator(){
    const operation = prompt("Choose the operation: ");
    enterNumberFunct();
    let result = 0;
    switch (operation) {
        case "+":
            result = sum(number1, number2);
            break;
        case "-":
            result = sub(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            result = divide(number1, number2);
            break;
        case "%":
            result = mod(number1, number2);
            break;
        default:
            result = "Invalid operation";
            break;
    }
    console.log(`number1: ${number1}, Operation: ${operation}, number2: ${number2}, result: ${result}`)
}
while(loopControl){
    calculator();
    loopControl = Boolean(prompt("Do you want to continue?"));
    if(loopControl === "false") {loopControl=false}
}
