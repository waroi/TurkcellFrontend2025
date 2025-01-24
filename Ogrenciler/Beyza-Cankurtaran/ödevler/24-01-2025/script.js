
function add(value1, value2) {
    console.log(value1 + value2);
}
function subtract(value1, value2) {
    console.log(value1 - value2);
}
function multiply(value1, value2) {
    console.log(value1 * value2);
}
function divide(value1, value2) {
    if (value2 === 0) {
        console.log("payda sıfır olamaz!")
    }
    console.log(value1 / value2);
}

calculator();
function calculator() {
    let devamEt = true;
    while (devamEt) {
        const islem = prompt("islem seçiniz(1-toplama2-çıkarma 3-çarpma 4- bölme):");
        const value1 = prompt("herhangi bir sayı griniz:");
        const value2 = prompt("herhangi bir say giriniz:");
        let sonuc;
        switch (islem()) {
            case "1":
                console.log("toplama islem seçildi");
                sonuc = add(value1, value2);
                break;
            case "2":
                console.log("çıkarma islem seçildi");
                sonuc = subtract(value1, value2);
                break;
            case "3":
                console.log("çarpma islem seçildi");
                sonuc = multiply(value1, value2);
                break;
            case "4":
                console.log("bölme islem seçildi");
                sonuc = divide(value1, value2);
                break;
            default:
                console.log("geçersiz islem seçildi");
                break;
        }
        devamEt=prompt("devam etmek istiyor musunuz?");


    }
alert("hesap makinesi sona erdi!");
}
calculator();
    function islem() {
        islem = prompt("islem seçiniz(1-toplama2-çıkarma 3-çarpma 4- bölme):");
        return islem;
    }
    calculator();



/*
function devam(){
   devam = prompt("devam etmek istiyorsanız y'ye basın"); 
   return devam;
}
if(devam==="y"){
    switch (islem()) {
        case "1":
            console.log("toplama islem seçildi");
            sonuc = add(value1, value2);
            break;
        case "2":
            console.log("çıkarma islem seçildi");
            sonuc = subtract(value1, value2);
            break;
        case "3":
            console.log("çarpma islem seçildi");
            sonuc = multiply(value1, value2);
            break;
        case "4":
            console.log("bölme islem seçildi");
            sonuc = divide(value1, value2);
            break;
        default:
            console.log("geçersiz islem seçildi");
            break;
    }
}
else{
    console.log("hesap makinesi kapandı..");
}*/




