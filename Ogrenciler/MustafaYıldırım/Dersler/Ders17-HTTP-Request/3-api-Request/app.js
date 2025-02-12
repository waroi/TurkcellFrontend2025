document.querySelector("#getBtn").addEventListener("click", getApiData);

function getApiData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.querySelector("#posts");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach(post);
    }
  };
}
