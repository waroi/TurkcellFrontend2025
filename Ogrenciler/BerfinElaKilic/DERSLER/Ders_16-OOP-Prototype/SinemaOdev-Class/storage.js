class Storage{
   static getMovie(){
    let movies = JSON.parse(localStorage.getItem("movieArray")) || [];
    return [...movies];
   } 
   static setMovie(name, object){
    localStorage.setItem(name, JSON.stringify(object));
   }
}