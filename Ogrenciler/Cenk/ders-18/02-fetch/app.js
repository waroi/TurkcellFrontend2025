function getTextFile() {
  fetch("text.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function getJsonFile() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => resolve("Veri silme işlemi başarılı"))
        .catch((err) => reject("Veri silme işlemi başarısız"));
    });
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 100,
//   id: 100,
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//   userId: 100,
//   id: 100,
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

Request.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
