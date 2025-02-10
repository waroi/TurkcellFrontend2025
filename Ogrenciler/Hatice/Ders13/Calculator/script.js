let currentValue = 0;

function add(value) {
    currentValue += value;
    return currentValue;
}

function subtract(value) {
    currentValue -= value;
    return currentValue;
}

function multiply(value) {
    currentValue *= value;
    return currentValue;
}

function divide(value) {
    if (value === 0) {
        console.log("Hata: Sıfıra bölme işlemi yapılamaz.");
        return currentValue;
    }
    currentValue /= value;
    return currentValue;
}

function clear() {
    currentValue = 0;
    return currentValue;
}

// Kullanıcıdan işlem seçimi
function calculator() {
    const operation = prompt(
        "Yapmak istediğiniz işlemi seçiniz:\n" +
        "1 - Toplama\n" +
        "2 - Çıkarma\n" +
        "3 - Çarpma\n" +
        "4 - Bölme\n" +
        "5 - Sıfırla\n" +
        "6 - Çıkış"
    );

    switch (operation) {
        case "1": {
            const value = parseFloat(prompt("Eklemek istediğiniz sayıyı giriniz:"));
            console.log("Sonuç:", add(value));
            break;
        }
        case "2": {
            const value = parseFloat(prompt("Çıkarmak istediğiniz sayıyı giriniz:"));
            console.log("Sonuç:", subtract(value));
            break;
        }
        case "3": {
            const value = parseFloat(prompt("Çarpmak istediğiniz sayıyı giriniz:"));
            console.log("Sonuç:", multiply(value));
            break;
        }
        case "4": {
            const value = parseFloat(prompt("Bölmek istediğiniz sayıyı giriniz:"));
            console.log("Sonuç:", divide(value));
            break;
        }
        case "5": {
            console.log("Hesap makinesi sıfırlandı:", clear());
            break;
        }
        case "6": {
            console.log("Hesap makinesinden çıkılıyor...");
            return;
        }
        default: {
            console.log("Geçersiz bir işlem seçtiniz.");
        }
    }

    // İşlemden sonra tekrar hesap makinesine döner
    calculator();
}

// Hesap makinesini başlat
calculator();
