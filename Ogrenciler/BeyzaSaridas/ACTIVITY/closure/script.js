//Closure, bir fonksiyonun kendi kapsamı dışındaki değişkenlere erişebilmesini sağlar.
function createDeger(name){
   setTimeout(function(){
      console.log(`HELLO,${name}`);
   },2000)
}
createDeger("beyza")

console.log("---");

function sayHello() {
   let name = "beyza";
 
   if (true) {
     let name = "saridas";
     console.log(name);
   }
   console.log(name); 
 }
 
 sayHello();
console.log("---");

 function deger(sayi){
   return function(carpi){
      return sayi*carpi +3;
   }
 }
 const sum=deger(4)(3);
 console.log(sum);
 console.log("---");
// deger=null;  garbage collector tarafından bellekten silinirmiş, gereksiz bellek kullanımını önlemek için.