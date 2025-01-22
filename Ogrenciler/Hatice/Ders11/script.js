var a=Math.floor(Math.random()*1000)


while(true){
    var tahmin = prompt("Bir sayı giriniz:")
    if(tahmin==a){
        alert("Tebrikler! Doğru tahmin: " + tahmin)
        break;
    }
    else if(tahmin<a){
        alert("Yukarı çık")
    }
    else{
        alert("Aşağı in")
    }
}

