// let name = "Oguzhan";
// let number = 111

// localStorage.setItem("name", name);
// localStorage.setItem("number", number)

// isim = localStorage.getItem("name");
// numara = localStorage.getItem("number")

// numara = Number(localStorage.getItem("number"))

// document.write(isim)
// document.write(numara)

// console.log(typeof (isim))
// console.log(typeof (numara))

// ----------------------Json Yapısı---------------------- 

/*let user = [

    isim = "Oguz",
    yas = 25
]

localStorage.setItem("user", JSON.stringify(user))

kullanici = localStorage.getItem("user")
kullaniciParse = JSON.parse(localStorage.getItem("user"))

document.write(kullaniciParse)
document.write(kullanici)*/


// ---------------------- Session Storage ---------------------- 

let deneme = [

    isim = "Ogi",
    sevdigiYemekler = ["Lahmacun, Döner,Sütlaç"]
]

sessionStorage.setItem("deneme", JSON.stringify(deneme))

getDeneme = JSON.parse(sessionStorage.getItem("deneme"))

document.write(typeof getDeneme)
document.write(getDeneme)
