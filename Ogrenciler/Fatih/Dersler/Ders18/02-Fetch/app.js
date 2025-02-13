// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// }

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// }

// function getApi() {
//   fetch("https://api.exchangeratesapi.io/latest")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// }

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
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
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
        .then((data) => resolve("Data deleted"))
        .catch((err) => reject(err));
    });
  }
}

Request.get("https://jsonplaceholder.typicode.com/albums")
  .then((albums) => console.log(albums))
  .catch((err) => console.error(err));

Request.post("https://jsonplaceholder.typicode.com/posts", {
  userId: 1,
  id: 1,
  title: "foo",
  body: "bar",
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

Request.put("https://jsonplaceholder.typicode.com/posts/1", {
  userId: 1,
  id: 1,
  title: "foo",
  body: "bar",
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

Request.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
