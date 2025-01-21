
var randomNumber = Math.floor(Math.random()*100)+1;

function numberGuess(number){

    while(number!=randomNumber){
        if(number>randomNumber){
            number= parseInt(prompt("Daha küçük bir sayı giriniz: "));
        }
        else if(number<randomNumber){
            number=parseInt(prompt("Daha büyük bir sayı giriniz: "));
        }
    }

    window.alert("Tebrikler sayıyı buldunuz!");
    return;
}

numberGuess(parseInt(prompt("Bir sayı giriniz: ")));