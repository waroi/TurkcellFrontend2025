//AJAX XML HTTP-W3School

//readyState=0,1,2,3..4:request bitti,hazır
//bu değişikliği kontrol etmek istersem readchange
document.getElementById("veri").addEventListener("click",function(){
   //XMLHttpRequest
   const xhr=new XMLHttpRequest();
   console.log(xhr);
   xhr.onreadystatechange=function(){
      console.log(this.readyState);
      if(this.readyState===4&&this.status===200){
         console.log(this.responseText);
         //console.log("veri alınamadı");
      }
   };

   /*xhr.onload = function(){
      if(this.status===200){
         console.log(this.responseText);
      }
   };*/
   xhr.open("GET","./text.txt",true);
   xhr.send();
});

