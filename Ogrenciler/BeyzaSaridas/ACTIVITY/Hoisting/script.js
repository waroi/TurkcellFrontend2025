//değişkenleri(scope) kaldırmak : ilk tanımlama sonra değer atama
var age=23;
console.log(age);
//aşağıdaki undefined olacak, ikisi birbirinden farklı
console.log(yas);
var yas=23;
//direkt fonksiyonu hoist yaptı yani yukarı taşıdı.
console.log(getFullName());
function getFullName(){
   return "beyza sarıdaş";
}
//değişkenler,tanımlamalar, fonksiyonlar bunları memorryde kaydediyor ama değer atamıyor.
//çalıştırma aşamasında atanıyor değerler. javascript

//let ve const da console.log yukarı yazılmaya izin verilmiyor,ulaşılmaz.
const age2=20;//let de aynı
console.log(age2);//temporal dead zone dan dolayı
//error functionlarda da kullanamam.
