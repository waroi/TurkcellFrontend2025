alert("Hoşgeldiniz");
alert("Toplama : + \n Çıkarma: - \n Çarpma: * \n Bölme: /");

function toplama(x,y){
    return x+y;
}
function cikarma(x,y){
    return x-y;
}
function carpma(x,y){
    return x*y;
}
function bolme(x,y){
    if(y === 0){
        alert("Sayı sıfıra bölünemez.")
    }
    else{
        return x/y;
    }
}

while(true){
    let x = parseInt(prompt("İlk sayıyı giriniz"));
    let y = parseInt(prompt("İkinci sayıyı giriniz"));
    let op = prompt("Operator giriniz").trim();
    var sonuc;
    switch (op){
        case "+":
            sonuc = toplama(x,y);
            break;
        case "-":
            sonuc = cikarma(x,y);
            break;
        case "*":
            sonuc = carpma(x,y);
            break;
        case "/":
            sonuc = bolme(x,y);
            break;
        default:
            alert("Lütfen geçerli bir operatör giriniz.");
            continue;
    }
    alert(`Sonuç :  ${sonuc}`);
    eh = prompt("Devam etmek istiyor musunuz?(E/Evet - H/Hayır)").toUpperCase();
    if(eh !="E"){
        break;
    }
}