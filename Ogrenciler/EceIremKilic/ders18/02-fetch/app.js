// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTextFile();
// function getJSONFile() {
//   fetch("users.json")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getJSONFile();
// function getAPIFile() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getAPIFile();


class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json;" },
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json;" },
      })
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.text())
        .then((data) => resolve("Veri silme işlemi başarılı."))
        .catch((err) => console.log(err));
    });
  }
}



// Request.get("https://jsonplaceholder.typicode.com/posts")
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

Request.post("https://jsonplaceholder.typicode.com/posts", {
  userId: 100,
  id: 100,
  title: "deneme",
  body: "asdaddasddadsfdgfg\nlorem",
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
