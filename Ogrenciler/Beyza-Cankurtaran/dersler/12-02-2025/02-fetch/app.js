/*function getTextField(){
    fetch("text.txt").then((response) => response.text())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
}
getTextField();

function getJSONField(){
    fetch("users.json")
    .then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
}
getJSONField();

function getAPI(){
    fetch("https://jsonplaceholder.typicode.com")
    .then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
}
getAPI();*/
class Request {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json()) // Doğru değişken kullanıldı
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Hata düzeltildi
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    static put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }, // Hata düzeltildi
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    static delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, { method: "DELETE" })
            .then(response => {
                if (response.ok) {
                    resolve("Silme işlemi başarılı!");
                } else {
                    reject("Silme işlemi başarısız!");
                }
            })
            .catch(err => reject(err));
        });
    }
}

Request.get("https://jsonplaceholder.typicode.com/posts")
.then(data=>console.log(data))
.catch((err)=>console.log(err));

Request.post("https://jsonplaceholder.typicode.com/posts",{
    "userID":1,
    "id":1,
    "title":"deneme",
    "body":"lorem ipsum falan filan",
})
.then((data)=>console.log(data,"güncelleme başarılı"))
.catch((err)=>console.log(err));