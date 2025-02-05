//object olarak kullanımı
let movie={
    name:"Avatar",
    director:"a b",
    year:"2010",
    genre:"bilim-kurgu",
}
sessionStorage.setItem("user",JSON.stringify(movie));
let getUser=JSON.parse(sessionStorage.getItem("movie"));
console.log(getUser);
console.log(typeof getUser);