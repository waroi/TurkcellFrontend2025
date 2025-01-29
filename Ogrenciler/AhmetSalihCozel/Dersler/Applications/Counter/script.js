var increaseButton = document.getElementById("increase");
var decreaseButton = document.getElementById("decrease");
var resetButton = document.getElementById("reset");
var counter = document.getElementById("counter");

console.log(counter)

var count = 0;

increaseButton.addEventListener("click",
    () => { 
        count = count +1;
        counter.textContent = count;
    });

decreaseButton.addEventListener("click",
    () => {
        count--;
        counter.textContent = count;
    });
    
resetButton.addEventListener("click",
    () => {
        count = 0;
        counter.textContent = count;
    });
    