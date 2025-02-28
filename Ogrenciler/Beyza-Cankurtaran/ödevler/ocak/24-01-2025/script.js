

function calculator() {
    let devamEt = true;
    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
    }

    function subtract(a, b) {
        return parseFloat(a) - parseFloat(b);
    }

    function multiply(a, b) {
        return parseFloat(a) * parseFloat(b);
    }

    function divide(a, b) {
        if (b == 0) {
            return "Sıfıra bölme hatası!";
        }
        return parseFloat(a) / parseFloat(b);
    }

    while (devamEt) {
        const islem = prompt("İşlem seçiniz (1-Toplama, 2-Çıkarma, 3-Çarpma, 4-Bölme):");
        const value1 = prompt("Birinci sayıyı giriniz:");
        const value2 = prompt("İkinci sayıyı giriniz:");
        let sonuc;

        switch (islem) {
            case "1":
                console.log("Toplama işlemi seçildi.");
                sonuc = add(value1, value2);
                break;
            case "2":
                console.log("Çıkarma işlemi seçildi.");
                sonuc = subtract(value1, value2);
                break;
            case "3":
                console.log("Çarpma işlemi seçildi.");
                sonuc = multiply(value1, value2);
                break;
            case "4":
                console.log("Bölme işlemi seçildi.");
                sonuc = divide(value1, value2);
                break;
            default:
                console.log("Geçersiz işlem seçildi.");
                sonuc = "Hata";
        }

        console.log(`Sonuç: ${sonuc}`);
        alert(`Sonuç: ${sonuc}`);

        const devamCevap = prompt("Devam etmek istiyor musunuz? (Evet veya Hayır)").toLowerCase();
        if (devamCevap !== "evet" && devamCevap !== "e") {
            devamEt = false;
        }
    }
    alert("Hesap makinesi sona erdi!");
    console.log("Hesap makinesi sona erdi.");
}
calculator();

