document.getElementById("veri").addEventListener("click", function(){
    //XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = function(){
        console.log(this.readyState);
        if (this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
        }
        else if (this.readyState === 4 && this.status === 404) {
            console.log("Veri alınamadı ")
        }
    };
    xhr.open("GET", "text.txt", true);//open ile istek açılmış oluşturulmuş oluyor 0dan 1e geçiyor yani
    xhr.send();
});