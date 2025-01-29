function menu () {
  while (true) {
    value1 = prompt('Lütfen ilk sayıyı girin!')
    value2 = prompt('Lütfen ikinci sayıyı girin!')
    islem = prompt('Hangi işlemi yapmak istiyorsunuz?')
    number1 = Number(value1)
    number2 = Number(value2)
    switch (islem) {
      case '+':
        sonuc = toplama(number1, number2)
        alert(`İşleminizin sonucu: ${sonuc}`)
        break
      case '-':
        sonuc = cıkarma(number1, number2)
        alert(`İşleminizin sonucu: ${sonuc}`)
        break
      case '*':
        sonuc = carpma(number1, number2)
        alert(`İşleminizin sonucu: ${sonuc}`)
        break
      case '/':
        sonuc = bölme(number1, number2)
        alert(`İşleminizin sonucu: ${sonuc}`)
        break
      case '**':
        sonuc = üsalma(number1, number2)
        alert(`İşleminizin sonucu: ${sonuc}`)
        break
      case '%':
        sonuc = modalma(number1, number2)
        alert(`İşleminizin sonucu: ${sonuc}`)
        break
      default:
        alert('Geçersiz işlem!')
    }
    bilmemne()
    function bilmemne () {
      karar = prompt('Devam etmek istiyor musunuz?')
      if (karar.toLowerCase() == 'evet') {
        value3 = prompt('Lütfen yeni sayıyı girin!')
        islem = prompt('Hangi işlemi yapmak istiyorsunuz?')
        alert(islemler(sonuc, Number(value3), islem))
        bilmemne()
      } else {
        menu()
      }
    }
  }
}

menu()

function islemler (a, b, islem) {
  if (islem == '1') {
    yenisonuc = a + b
    sonuc = yenisonuc
    return sonuc
  } else if (islem == '2') {
    yenisonuc = a - b
    sonuc = yenisonuc
    return sonuc
  } else if (islem == '3') {
    yenisonuc = a * b
    sonuc = yenisonuc
    return sonuc
  } else if (islem == '4') {
    yenisonuc = a / b
    sonuc = yenisonuc
    return sonuc
  } else if (islem == '5') {
    yenisonuc = a ** b
    sonuc = yenisonuc
    return sonuc
  } else if (islem == '6') {
    yenisonuc = a % b
    sonuc = yenisonuc
    return sonuc
  }
}

function toplama (a, b) {
  return a + b
}
function cıkarma (a, b) {
  return a - b
}
function carpma (a, b) {
  return a * b
}
function bölme (a, b) {
  return a / b
}
function üsalma (a, b) {
  return a ** b
}
function modalma (a, b) {
  return a % b
}
