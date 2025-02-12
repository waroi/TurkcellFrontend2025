document.getElementById("veri").addEventListener("click", function () {
    // XMLHttpRequest
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    // xhr.onreadystatechange = function () {
    //   console.log(this.readyState);
    //   if (this.readyState === 4 && this.status === 200) {
    //     console.log(this.responseText);
    //   }
    //   if (this.readyState === 4 && this.status === 404) {
    //     console.log("Veri alınamadı");
    //   }
    // };
  
    xhr.onload = function () {
      if (this.status === 200) {
        console.log(this.responseText);
      }
    };
    xhr.open("GET", "./text.txt", true);
    xhr.send();
  });
  