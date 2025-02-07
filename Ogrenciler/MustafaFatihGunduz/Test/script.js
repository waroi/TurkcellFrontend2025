function abc(){
    console.log(abc.xyz);
}
abc(); //* undefined
abc.xyz = 400;
abc.xyz = 500;
abc(); //* 500

const numbers = [1, 2, 3, 4, 5];
numbers[100] = 99;
console.log(numbers); //* 1,2,3,4,5 ve 95 elemanı undefined olur ve 99 elemanı 100. indise eklenir

console.log(typeof typeof 1); //! Sağdan sola doğru çalışır ilk önce typeof 1 çalışır ve number döner sonra typeof number çalışır ve string döner

const arr = [..."Fatih"] //! Spread operatörü ile stringi arraya çevirir ve her bir karakteri bir eleman olarak alır
console.log(arr);

console.log(parseInt("19+2")); //! 19 Sadece ilk sayıyı alır
console.log(parseInt("19")+ parseInt("2"));  //* 21
console.log(parseInt("7FM")); //* 7
console.log(parseInt("FM7")); //* NAN
console.log(parseInt("FM")+7); //* NAN
console.log(isNaN(parseInt("FM"))); //* TRUE

console.log([1,2].map((num) => {
    if (num > 0) {
        return;
    }
})); //* [undefined, undefined] map fonksiyonu her zaman bir array döner ve undefined olan elemanlar döner

function a(){
    return;
}
console.log(a()); //* undefined

{
    function abcd(){
        console.log("Merhaba");
    }
}

console.log(abcd()); //* ReferenceError: abcd is not defined

{
    function x(a,b){
        "use strict";
        a = 100;
        b = 20;
        return arguments[0] + arguments[1];
        console.log(a+b);
    }
}

console.log(x(100,200)); 

const arr1 = [1,2,3,4,5,6,7,8,9];
const newArr = arr1.find((item) => item > 5);
console.log(newArr); //* 6 find fonksiyonu sadece ilk bulduğu elemanı döner



