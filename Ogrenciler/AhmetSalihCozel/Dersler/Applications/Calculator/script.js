var screen = document.getElementById("screen")

var AC = document.getElementById("AC")              //
var square = document.getElementById("square")
var del = document.getElementById("del")            //
var division = document.getElementById("division")  
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var multiply = document.getElementById("multiply")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var subtract = document.getElementById("subtract")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var plus = document.getElementById("plus")
var zero = document.getElementById("zero")
var bracket = document.getElementById("bracket")
var comma = document.getElementById("comma")
var equal = document.getElementById("equal")        //
var lB = 0;
var lBreduced = 0;
var element = "";

var priority = {
    "c":1,
    "t":2,
    "x":3,
    "b":4,
    "l":0,
    "r":0,
}
            

var bracketLeft = 0;
var bracketRight = 0;

var operatorStack = [];
var outputQueue = [];

var screenReplaced = screen.textContent.replaceAll("(","l").replaceAll(")","r").replaceAll("×","x").replaceAll("÷","b").replaceAll("+","t").replaceAll("-","c")
var screenSplitedArray = screenReplaced.split(/(?=[\srlxbtc]+)|(?<=[\srlxbtc]+)/)

equal.addEventListener("click",()=>{
    while(screenSplitedArray.length != 0){
        element = screenSplitedArray.shift()
        console.log(element)
        if(element == "r" || element == "l" || element == "x" || element == "b" || element == "t" || element == "c"){
            operatorStack.push(element)
        }else {
            outputQueue.push(element)
        }
        if(element == "r") {
            screenSplitedArray.shift()
            operatorStack.pop()
            element = operatorStack.pop()
            lB = operatorStack.filter((val)=>{return val=="l"}).length
            console.log(operatorStack)
            console.log(lB)

            lBreduced = lB-1;
            while(lB >= lBreduced){
                if(priority[element] < priority[operatorStack[-1]]){
                    operatorPop = operatorStack.pop()
                    outputQueue.push(operatorPop)
                    operatorStack.push(element)
                } else {
                    outputQueue.push(operatorPop)
                    operatorStack.push(element)
                }
                operatorStack = removeLastMatch(operatorStack,"l")
                outputQueue = removeLastMatch(outputQueue,"l")
                lB = operatorStack.filter((val)=>{return val=="l"}).length
            }


        }

        console.log(outputQueue)
        console.log(operatorStack)
    }

}
)



square.addEventListener("click",()=>{screen.textContent+=square.textContent})
division.addEventListener("click",()=>{screen.textContent+=division.textContent})
one.addEventListener("click",()=>{screen.textContent+=one.textContent})
two.addEventListener("click",()=>{screen.textContent+=two.textContent})
three.addEventListener("click",()=>{screen.textContent+=three.textContent})
multiply.addEventListener("click",()=>{screen.textContent+=multiply.textContent})
four.addEventListener("click",()=>{screen.textContent+=four.textContent})
five.addEventListener("click",()=>{screen.textContent+=five.textContent})
six.addEventListener("click",()=>{screen.textContent+=six.textContent})
subtract.addEventListener("click",()=>{screen.textContent+=subtract.textContent})
seven.addEventListener("click",()=>{screen.textContent+=seven.textContent})
eight.addEventListener("click",()=>{screen.textContent+=eight.textContent})
nine.addEventListener("click",()=>{screen.textContent+=nine.textContent})
plus.addEventListener("click",()=>{screen.textContent+=plus.textContent})
zero.addEventListener("click",()=>{screen.textContent+=zero.textContent})
comma.addEventListener("click",()=>{screen.textContent+=comma.textContent})

bracket.addEventListener("click",
    ()=>{
        bracketLeft = screen.textContent.split("(").length-1
        bracketRight = screen.textContent.split(")").length-1

        if(bracketLeft>bracketRight){
            screen.textContent+=")"
        } else {
            screen.textContent+="(" 
        }
    }
)


del.addEventListener("click",()=>{screen.textContent=screen.textContent.slice(0,-1)})

function addition(number1,number2){
    return number1+number2
}

function subtract(number1,number2){
    return number1-number2
}

function division(number1,number2){
    return number1/number2
}

function multiply(number1,number2){
    return number1*number2
}

function removeLastMatch(arr, val){
    let lastIndex = arr.lastIndexOf(val);
    if (lastIndex !== -1){arr.splice(lastIndex, 1);}
    return arr;
}





AC.addEventListener("click",
    () => {
    screen.textContent = "";
})