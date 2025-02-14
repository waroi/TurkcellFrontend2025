// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTextFile();

const { method } = require("detect-libc");

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getJsonFile();

//-------------Api hali---------------
// function getJsonFile() {
//     fetch("users.json")
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err));
//   }
//   getJsonFile();

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
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
      });
    });
  }
}

Request.get("https://jsonplaceholder.typicode.com.posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
