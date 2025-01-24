function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function input(message, isDivision = false) {
    let input, result, isNotNumber, isZero;
    do {
      input = prompt(`Enter ${message}:`);
      result = parseInt(input);
  
      isNotNumber = isNaN(result);
      isZero = isDivision && (result === 0);
      if(isNotNumber || isZero){
        alert("Invalid value entered, try again!");
      }

    } while (isNotNumber || isZero);
    return result;
  }

alert("Welcome to Calculator App!");
do {

    let firstNum = input("First number");
    let operation = prompt("Enter the 1 for adding operation, 2 for subtracting operation, 3 for multiplying operation, 4 for dividing operation:");
    let secondNum = input("Second number",operation == 4);
    let result;
    
    switch (operation) {
        case "1":
            result = add(firstNum,secondNum);
            alert(result);
            break;
        case "2":
            result = subtract(firstNum,secondNum);
            alert(result);
            break;
        case "3":
            result = multiply(firstNum,secondNum);
            alert(result);
            bre
        case "4":
            result = divide(firstNum,secondNum);
            alert(result);
            break;
        default:
            alert("Geçersiz işlem kodu!")
            break;
    }
} while (
    confirm("Do you wanna continue?")
);
