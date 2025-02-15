document.getElementById("getButton", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      data.forEach((user) => {
        list.innerHTML += ``;
      });
    }
  };
}
