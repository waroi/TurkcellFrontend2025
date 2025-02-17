function getTextFile() {
  fetch("text.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getTextFile();

function getJsonFile() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getJsonFile();

function getApi() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getApi();

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
    return new Promise((reselve, reject) =>
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        //headers:
      })
    );
  }
}
