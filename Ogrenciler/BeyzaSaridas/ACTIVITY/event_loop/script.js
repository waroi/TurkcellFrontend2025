//EVENT LOOP

//senkronlarda call stackda olduğu gibi o satırın çalışmasının bitmesini bekleriz
//asenkronlarda o satırın bitip bitmmesi çok önemli değildir.
//setTimeout=asenkron::bir adet call back veririz. şu kadar süre sonra çalıştır.

//setTimeout'daki süre için thread pool'A ALINIP SÜRENİN geçmesi orda bekleniyor.kodun çalışması kaldığı yerden devam eder.
////////////////////////////////////////////////////////////////
//Event Loop JavaScript'in asenkron işlemleri yönetmesini sağlayan mekanizmadır.
//  JavaScript tek iş parçacıklı (single-threaded) bir dildir ve aynı anda yalnızca bir işlem gerçekleştirebilir. 

//setTimeout gibi callback ler süresi dolunca task queue içerisinde sıraya alınırlar. vakti geldiğinde(uygun koşullarda) event looplar tarafından alınıp çalıştıırılıp call stackler içersine taşınırlar.
//call stack boş olmalı ki task queue içerisindeki görevi çalıştırabilelim.
//setTimeout(callback,3000): bu 3 sn sonra ilk fırsatta çalışsın demektir. kendinden önceki işlemerin bitmesi gerekiyor.
/*
Task Queue, asenkron işlemlerin tamamlanmasının ardından bekletilen işlemlerin sırasını tutan 
bir yapıdır. Web APIs tarafından tamamlanan asenkron işlemler, 
Task Queue'ya eklenir ve Call Stack'in boşalmasını bekler.
-----
JavaScript'te Event Loop'un çalışma prensibi, şu şekildedir:
**Öncelikle, Call Stack'teki (Çağrı Yığını) işlemler yukarıdan aşağıya doğru gerçekleştirilir.
**Eğer Call Stack'teki bir işlem, asenkron bir işlem (örneğin: setTimeout, fetch gibi) içeriyorsa,
 bu işlem Web APIs tarafına yönlendirilir ve burada işlem gerçekleştirilir.
**Asenkron işlem tamamlandığında, bu işlem Task Queue'ya (Görev Kuyruğu) eklenir.
**Event Loop, sürekli olarak Call Stack'in boş olup olmadığını kontrol eder. 
Eğer Call Stack boş ise, Event Loop, Task Queue'daki işlemleri Call Stack'e aktarır
 ve bu işlemler gerçekleştirilir.
*/
/*RENDER
1. Parsing 
HTML Parsing:
HTML kodu tarayıcı tarafından okunur ve DOM (Document Object Model) oluşturulur.
CSS Parsing:
CSS dosyaları okunur ve CSSOM (CSS Object Model) oluşturulur.
JavaScript Parsing:
JavaScript kodları gerektiğinde çalıştırılır ve DOM manipülasyonları yapılır.
2.DOM ve CSSOM Oluşumu
3.Layout
*/

console.log("Merhaba");
setTimeout(function() {
  console.log("Dünya");
}, 1000);
console.log("JavaScript");

//sonsuz döngü, arrow function
const loop= ()=> {
   console.log("merhaba beyza");
   setTimeout(loop, 1000);}
loop();