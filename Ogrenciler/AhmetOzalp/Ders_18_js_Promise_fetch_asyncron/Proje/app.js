class Request {
    static get(url) {
        return new Promise ((resolve,reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
}

Request.get("https://jsonplaceholder.typicode.com/posts")
.then((data) => console.log(data))
.catch((err) => console.log(err));


const card =document.getElementById("cardId");
posts.forEach(element => {
    const info = document.createElement("div");
    info.className="card-body";
    const title =document.createElement("h2");
});