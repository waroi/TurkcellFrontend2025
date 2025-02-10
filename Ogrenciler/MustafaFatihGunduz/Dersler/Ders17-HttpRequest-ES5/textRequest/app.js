const button = document.querySelector('#veri').addEventListener('click', function () {
   //XMLHttpRequest
   const xhr = new XMLHttpRequest();
   console.log(xhr);
//    xhr.onreadystatechange = function (){
//     console.log(this.readyState);
//     if (this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText);
//     }
//     if (this.readyState === 4 && this.status === 404) {
//         console.log("Veri bulunamadı");
//     }
//    }
    xhr.onload = function (){
         if (this.status === 200) {
              console.log(this.responseText);
         }
         if (this.readyState === 4 && this.status === 404) {
                    console.log("Veri bulunamadı");
                }
    }
   xhr.open('GET','./text.txt',true); //* true: asenkron, false: senkron
   xhr.send();
});
