document.getElementById("getButton").addEventListener("click", getApiData);

function getApiData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        let list = document.getElementById("posts");
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            data.forEach(function (post) {
                list.innerHTML += `<li><h2>${post.title}</h2></li>
          <li>${post.body}</li>`;
            });
        } else {
            console.log("Error");
        }
    };
    xhr.send();
}
