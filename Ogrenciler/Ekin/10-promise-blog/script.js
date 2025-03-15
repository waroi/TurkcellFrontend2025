class Request {
  static getJSON(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => {
          alert("Verileri getirirken bir hata oluştu.");
          return reject(error);
        });
    });
  }
}

const main = document.querySelector("main .container");

async function renderPosts() {
  let posts = await Request.getJSON(
    "https://jsonplaceholder.typicode.com/posts"
  );
  let users = await Request.getJSON(
    "https://jsonplaceholder.typicode.com/users"
  );

  posts.map((post, index) => {
    let card = document.createElement("div");
    card.className = "card mb-3";
    card.innerHTML = `<div class="card-header"></div><img src="https://picsum.photos/1200/200?random=${index}" class="card-img-top" /><div class="card-body"><h5 class="card-title"></h5><p class="card-text"></p><a href="#" class="btn btn-primary">Read More</a></div>`;
    let user = users.find((user) => user.id == post.userId);
    card.querySelector(".card-header").textContent =
      user.username + " | " + user.name;
    card.querySelector(".card-title").textContent =
      post.title[0].toUpperCase() + post.title.substring(1);
    card.querySelector(".card-text").textContent =
      post.body[0].toUpperCase() + post.body.substring(1) + ".";

    main.appendChild(card);
  });
}

renderPosts();
