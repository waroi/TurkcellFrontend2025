let bilgisayar = Math.floor(Math.random() * 100 + 1); // Rastgele sayı 1-100 arası
console.log("1-100 arası bir sayı tuttum! Tahmin etmeye çalışın.");
let userGuess;

do {
    const userInput = prompt("Lütfen 1-100 arasında bir sayı girin:");
    userGuess = Number(userInput); 

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        console.log("Geçerli bir sayı girin (1-100 arasında).");
        continue; 
    }

    if (userGuess == bilgisayar) {
        console.log("Tebrikler! Doğru tahmin.");
    } else if (userGuess > bilgisayar) {
        console.log("Daha küçük bir değer yazın.");
    } else {
        console.log("Daha büyük bir değer yazın!");
    }
} while (userGuess !== bilgisayar);
