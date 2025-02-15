class Request {
    async get(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Bir hata oluştu: " + response.status);
        return await response.json();
    }
}

const request = new Request();

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const posts = await request.get("https://jsonplaceholder.typicode.com/posts");
        renderPosts(posts);
    } catch (err) {
        console.error(err);
    }
});

function renderPosts(posts) {
    const row = document.getElementById("row");
    row.innerHTML = ""; // Kadriye index htmlde yazdığınızı tutmak istemezseniz bu kod kalıcak eğer tutmak isterseniz bu kodu silecekseniz yapınıza uygun kurdum ben 

    posts.forEach((post) => {
        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text"><strong>User ID:</strong> ${post.userId}</p>
                    <p class="card-text"><strong>ID:</strong> ${post.id}</p>
                    <p class="card-text">${post.body}</p>
                </div>
            </div>
        `;

        row.appendChild(col);
    });
}
