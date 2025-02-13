class Request {
    async get(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error("bir hata oluştu" + response.status);
        const data = await response.json();
        return data;
    }
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/posts")
    .then((posts) => {
        console.log(posts);
        const row = document.querySelector(".row");
        for (let post of posts) {

            const col = document.createElement("div");
            col.className = "col-md-6 mb-4";
            const card = document.createElement("div");
            card.className = "card h-100";
            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = `Başlık: ${post.title}`;
            const userId = document.createElement("p");
            userId.className = "card-text";
            userId.textContent = `User ID ${post.userId}`;
            const id = document.createElement("p");
            id.className = "card-text";
            id.textContent = `ID: ${post.id}`;
            const body = document.createElement("p");
            body.className = "card-text";
            body.textContent = `İçerik: ${post.body}`;

            cardBody.append(title, userId, id, body);
            card.append(cardBody);
            col.append(cardBody);

            row.appendChild(col);
        }




    })
    .catch((err) => {
        console.error(err);
    });
