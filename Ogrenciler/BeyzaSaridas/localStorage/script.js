function filmEkle(){
   const ad=document.getElementById("ad").value;
   const yonetmen=document.getElementById("yonetmen").value;
   const tur=document.getElementById("tur").value;
   const yil=document.getElementById("yil").value;
   const img=document.getElementById("img").value;

   if(!ad||!yonetmen||!tur||!yil||!img){
      alert("Please select");
      return;
   }
}

const yeniFilm = {
   adi: ad,
   yonetmen: yonetmen,
   tur:tur,
   yil: yil,
   img:img,
};

let filmler=JSON.parse(localStorage.getItem("filmler"));
yeniFilm.push(filmler);
localStorage.setItem("filmler", JSON.stringify(filmler));
console.log(filmler);
