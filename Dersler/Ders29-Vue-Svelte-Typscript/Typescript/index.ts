const mesaj: string = "Merhaba Typescript";
console.log(mesaj);
// let sayi: number = "10";
// console.log(sayi);
let sayi: number = 10;
console.log(sayi);
let isAdmin: boolean = true;
console.log(isAdmin);
let bosDeger: null = null;
console.log(bosDeger);
let Tanimsiz: undefined = undefined;
console.log(Tanimsiz);
let esnek: any = "10";

function topla(x: number, y: number): number {
  return x + y;
}

console.log(topla(10, 20));

const carpma = (x: number, y: number): number => x * y;

// interface Kisi {
//   ad: string;
//   yas: number;
// }

type Kisi = {
  ad: string;
  yas: number;
}

const kisi: Kisi = { ad: "Ali", yas: 20 };

function kimlik<T>(deger: T): T {
  return deger;
}
console.log(kimlik<string>("Ali"));
console.log(kimlik<number>(15));

let sayilar: number[] = [1, 2, 3, 4, 5];

