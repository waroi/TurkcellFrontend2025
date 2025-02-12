function getTextFile(){
    fetch("text.txt") //path hatalı olursa direkt path i gösteren bir err veriyor
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
getTextFile();

// catch en sona yazılır !!!

function getJsonFile(){
    fetch("users.json") //path hatalı olursa direkt path i gösteren bir err veriyor
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
getJsonFile();

function getApi(){
    fetch("https://jsonplaceholder.typicode.com/posts") //path hatalı olursa direkt path i gösteren bir err veriyor
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}
getApi();


class Request {
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
    static post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"POST",
                body: JSON.stringify(data),
                headers: {"Content-type": "application/json;"},
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
    static put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {"Content-type" : "application/json;"},
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
    static delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
            })
            .then((response) => response.json())
            .then((data) => resolve("Veri Silme İşlemi Başarılı"))
            .catch((err) => reject("Veri Silme İşlemi Başarısız"));
        });
    }
}

Request.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

Request.post("https://jsonplaceholder.typicode.com/posts",
    {
        userId: 100,
        id: 100,
        title: "deneme",
        body: "zzzxcvcxvnmngd eveniet architecto"
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
Request.put("https://jsonplaceholder.typicode.com/posts/1",
    {
        userId: 100,
        id: 100,
        title: "deneme",
        body: "zzzxcvcxvnmngd eveniet architecto"
    })
    .then((data) => console.log("Başarılı"))
    .catch((err) => console.log(err));

Request.delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// !!!!! Önemli !!!!!
// neden hem içinde hem de dışında then yazdık 
// sonuç asenkron dönüyor, bu yüzden de fetchi direkt return edince herhangi bir veri gelmeyebilir
// ne zaman geleceğini bilmediğimiz
// asenkron olmaya devam etmesi için tekrar çağırıyoruz
// fetch'in içindekiler kendien ait, request'deki ... 

// Her promise fonksiyonu çağırdığımızda altında tekrar then ve catch ekliyoruz
// Her seferinde yapmak zorunda mıyız => evet 
// cevabı then veya catch ile yakalamalıyız
// bu işlemi yukarıdaki metotta yapamayız, aşağıda da bu yapıyı kullanıyoruz
// 