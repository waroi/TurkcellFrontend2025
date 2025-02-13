class Request{
    async get(url){
        const response=await fetch(url);
        if(!response.ok)throw new Error("bir hata oluştu"+response.status);
        const data=await response.json();
        return data;
    }
}
let data;
const request=new Request();
request.get("https://jsonplaceholder.typicode.com/posts")
.then((posts)=> {
    data=posts;
    console.log(posts);
})
.catch((err)=>{
    console.error(err);
});

document.addEventListener("DOMContentLoaded", function() {
    console.log(data);
    for (let posts of data) {

        const col = document.createElement("div");
        col.className ="col";
        const cardBody = document.createElement("div");
        cardBody.className ="card-body";
        
        const title = document.createElement("h5");
        title.className ="card-title";
        body.textContent = `Başlık: ${posts.title}`;
        const userId = document.createElement("p");
        userId.className ="card-text";
        body.textContent = `User ID ${posts.userId}`;
        const id = document.createElement("p");
        id.className ="card-text";
        body.textContent = `ID: ${posts.id}`;
        const body = document.createElement("p");
        body.className ="card-text";
        body.textContent = `İçerik: ${posts.body}`;
        
        cardBody.append(title, userId, id, body);
        col.append(cardBody);
        const row = document.querySelector(".row");
        row.appendChild(col);
    }
        
   

 })