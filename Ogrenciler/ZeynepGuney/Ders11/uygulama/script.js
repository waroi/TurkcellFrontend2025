random = Math.floor(Math.random() * 20); 
console.log(random);
tahmin = prompt("Sayı tahminini girin :");
console.log(tahmin);

setTimeout(() => {
    alert("Doğru bildiniz.");
    }, 2000);
while (true){
    if (tahmin > random){
        alert("Daha küçük sayı girin.");
        tahmin = prompt("Sayı tahminini girin :");
        console.log(tahmin);
    } else if (tahmin < random){
        alert("Daha büyük sayı girin.");
        tahmin = prompt("Sayı tahminini girin :");
        console.log(tahmin);
    } else {
        setTimeout();
    }
}
