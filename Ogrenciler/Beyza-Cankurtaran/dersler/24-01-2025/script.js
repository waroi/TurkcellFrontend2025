let value;
const numbers=[43,56,33,23,44,35,5];
const langs=["python","c","javascript","c++"];

value=numbers.length;//arrayin eleman sayısını verir
value=numbers[0];//arrayin ilk elemanını verir
value=numbers[numbers.length-1];//arrayin son elemanı
value=numbers[2];//arrayin 2. indexteki değerini verir
value=numbers[3]=1000;//arrayin 3. indexteki değerini değiştirir

numbers.push(200);//arrayin sonuna 200 ekler
numbers.unshift(300);//arrayin baına 300 ekler.
numbers.pop();//arrayin son elemanını siler.
numbers.shift();//arrayin başındaki elemanı siler.
numbers.splice(0,3);//arrayin 0. elemanından başlayarak 3 elemanını siler.
numbers.reverse();//arrayi ters çevrir

value=numbers.indexOf(23);//arrayin içindeki 23 değerinin indexini verir
value=numbers.includes(23);//arrayin içinde 23 değeri var mı yok mu kontrol eder
value=numbers.sort(function(a,b){
    return a-b;
});//23,33,35,43,44,5,56 şeklinde sıralıyor
value=langs.sort((x,y)=>x-y);//küçükten büyüğe sıralar
value=langs.sort((x,y)=>y-x);//büyükten küçüğe sıralar

console.log(value);
console.log(typeof value);


/************************ */
/*Object özellikleri*/
//let value;
const user={
    name:"beyza",
    lastName:"Can",
    age:23,
    department:"bilişim",
    langs:["python","c","javascript","c++"],
    address:{
        city:"konya",
        street:"nalçacı"
    },
    work:function(){
        console.log("çalışıyor...");
    },
};

value=user;
value=user.name;
value=user["name"];
value=user.langs;
value=user.langs[0];
value=user.addresss.city;
user.work();

//zaman objesi
const now=new Date();
value=now;
value=now.getFullYear();
value=now.getDate();
value=now.getDay();
value=now.getMonth();
value=`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;

console.log(value);
/******************* */
/*karşılaştırma öperatörleri*/
//== eşittir :eşitse true değilse false döner
a=10;
b="10";
console.log(a==b);//true
//neden true dönüyo:sadece değerlere bakıyo çünküü
//=== ikiside gerçekten aynı tipte ve aynı değerde ise true döner.
a=10;
b="10";
console.log(a===b);//false

//!= eşit değilse true eşitse false
a=10;
b="10";
console.log(a!=b);//false

//!== hem tipi hem değeri burada da kontrol ediyor
a=10;
b="10";
console.log(a!==b);//true

/*< küçüktr > büyüktür */
a=10;
b=5;
console.log(a<b);//falsch
console.log(a>b);//true

//<= küçük eşit mi >= büyük eşit mi
a=10;
b=10;
cosole.log(a<=b);//true
console.log(a>=b);

//and operatörü(&&) her iki koşulda doğruysa true başka türlü falsch
console.log((5==5)&&(5==6));//false
console.log((5==5)&&(5=="5"));//true

//or operatörü(||) bir koşulda doğruysa true hepsi yanlışsa yanlış
console.log((5==5)||(5==6));//true
console.log((5==5)||(5=="5"));//true
console.log((5==4)||(5==6));//false

//not operaötür !
console.log(!(5==3));//true

console.log(user?.address?.city);
// JavaScript'te Optional Chaining (Opsiyonel Zincirleme) operatörü olarak adlandırılır.

//Bu operatör, bir nesnede bir alt özelliğe erişirken, o özelliğin veya nesnenin tanımlı olup olmadığını kontrol etmek için kullanılır. Eğer zincirdeki herhangi bir değer null veya undefined ise, bir hata atmadan undefined döner ve kod çalışmaya devam eder.

//koşullar
//if
a=20;
b=10;
if(a<b){
    console.log("a b den küçüktr.");
}else if(a>b){
    console.log("a b den büyüktür");
}
    else{
    console.log("a b ye eşittir");
}
//switch case
const islem=4;
switch (islem){
    case 1:
        console.log("birinci islem seçildi");
        break;
    case 2:
        console.log("ikinci islem seçildi");
        break;
    case 3:
        console.log("ucunucu islem seçildi");
        break;
    default:
        console.log("geçersiz islem seçildi");
        break;
}

//döngüler
//for döngüsü
const lang=["python","c","javascript","c++"];
for(let i=0;i<lang.length;i++){
    console.log(lang[i]);
}

//while döngüsü
i=0;
while(i<lang.length){
    console.log(lang[i]);
    i++;
}
//sonsuz döngüü
/*
i=0;
while(true){
    console.log(lang[i]);
    i++;
}*/

//do-while döngüsü
i=0;
do{
    console.log(lang[i]);
    i++;
}while(i<lang.length);

//functions
function merhaba(name){
    console.log(`marhaba ${name}`);
}

function merhaba(name,lastname="bilgi yojk"){
    console.log(`marhaba ${name}`);
}

//return ede fonksiyonlar
function square(x){
    return x*x;
}

//arrw functions
const cube=(x)=>x*x*x;
console.log(cube(3));

//kullanıcıdan işlem seçmesini ve değerleri alarak bir hesap makinesi uygulaması yapınız.