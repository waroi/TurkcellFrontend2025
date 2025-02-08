function LocalStorage(){
    this.movies = JSON.parse(localStorage.getItem("movies"));
    console.log(JSON.parse(localStorage.getItem("movies")));
}
LocalStorage.prototype.addStorage = function(movie){
    if (movie != null || movie != "object");
    this.movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(this.movies));
};
const storage = new LocalStorage();

storage.addStorage();