const secim=prompt("İşlem seçiniz: (\n1:+, \n2:-, \n3:*, \n4:/, \n5:Çıkış )");
const sayi1 = prompt("ilk sayı:");
const sayi2 = prompt("ikinci sayı: ");
const toplama = (sayi1, sayi2) => {
    sayi1+sayi2;
}
const cikarma = (sayi1, sayi2) => {
    sayi1-sayi2;
}
const carpma = (sayi1, sayi2) => {
    sayi1*sayi2;
}
const bolme = (sayi1, sayi2) => {
    sayi1/sayi2;
}
while(true){
    let stop = false;
    switch(secim){
        case 1:
            toplama(sayi1, sayi2);
            break;
        case 2:
            cikarma(sayi1, sayi2);
            break;
        case 3:
            carpma(sayi1, sayi2);
            break;
        case 4:
            bolme(sayi1, sayi2);
            break;
        case 5: 
            stop=true;
            break;
        default:
            console.log("Geçersiz işlem girdiniz.");
        break;
    }
    if(stop) break;
}