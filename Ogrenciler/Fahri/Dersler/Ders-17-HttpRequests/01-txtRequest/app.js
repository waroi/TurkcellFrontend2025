document.getElementById("veri").addEventListener("click", function () {
  //XMLHttpRequests
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhr.open("GET", "./text.txt", true);
  xhr.send();
});
