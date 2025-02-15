// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTextFile();

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getJsonFile();

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getApi();

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
        headers: { "Content-type": "application/json;" },
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
        headers: { "Content-type": "application/json;" },
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
        .then((data) => resolve("Veri Silme İşlemi Başarılı"))
        .catch((err) => reject("Hata: Silme İşlemi Başarısız"));
    });
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 100,
//   id: 100,
//   title: "deneme",
//   body: "fghfghfgh hgjfg ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//   userId: 100,
//   id: 100,
//   title: "deneme",
//   body: "fghfghfgh hgjfg ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
// })
//   .then((data) => console.log(data, "Başarılı"))
//   .catch((err) => console.log(err));

Request.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
