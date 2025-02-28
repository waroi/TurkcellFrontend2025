document.getElementById("veri").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    };

    xhr.open("GET", "./text.txt", true);
    xhr.send();
});
