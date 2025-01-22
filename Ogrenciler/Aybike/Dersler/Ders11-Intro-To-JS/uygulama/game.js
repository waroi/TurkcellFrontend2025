
var randomNumber = Math.floor(Math.random()*100)+1;

function numberGuess(number){
    if(number == randomNumber){
        console.log("Tebrikler sayıyı buldunuz!");
        window.alert("Tebrikler sayıyı buldunuz!");
        return;
        }

    else if(number > randomNumber){
            var num = parseInt(prompt("Daha küçük bir sayı giriniz: "));
            numberGuess(num);
    }
    else if(number<randomNumber){
            var num = parseInt(prompt("Daha büyük bir sayı giriniz: "));
            numberGuess(num);
        }
    }

numberGuess(parseInt(prompt("Bir sayı giriniz: ")));