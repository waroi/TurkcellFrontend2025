//function getTextFile(){
//  fetch("text.txt").then((response) => response.text())
//  .then((data)=> console.log(data))
//  .catch((err) => console.log(err));
//}
//getTextFile();


//function getJsonFile(){
//    fetch("users.json").then((response) => response.json())
//    .then((data)=> console.log(data))
//    .catch((err) => console.log(err));
//}
//getsonFile();

//function getApi(){
//    fetch("https://jsonplacehholder.typicode.com/posts")
//    .then((response) => response.json())
//    .then((data)=> console.log(data))
//    .catch((err) => console.log(err));
//}
//getApi();

class Request{
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => response.json())
            .then((data)=> console.log(data))
            .catch((err) => console.log(err));
        });
    }
    static post(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url,{
                method:"POST",
                body: JSON.stringify(data),
                headers: {"content-type":"application/json;"},
            })
            .then((response) => response.json())
            .then((data)=> console.log(data))
            .catch((err) => console.log(err));
        });
    }
    static put(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url,{
                method:"PUT",
                body: JSON.stringify(data),
                headers: {"content-type":"application/json;"},
            })
            .then((response) => response.json())
            .then((data)=> console.log(data))
            .catch((err) => console.log(err));
        });
    }
    static delete(url, data){
        return new Promise((resolve, reject)=> {
            fetch(url,{
                method:"DELETE",
            })
            .then((response) => response.json())
            .then((data)=> resolve("Veri silme işlemi başarılı"))
            .catch((err) => reject("Veri silme işi başarısız"));
        });
    }
}

//Request.get("https://jsonplacehholder.typicode.com/posts")
//  .then((data)=> console.log(data))
//  .catch((err) => console.log(err));


//Request.post("https://jsonplacehholder.typicode.com/posts", {
//    userId:100,
//    id:100,
//    title:"deneme",
//    body: "adsadjhfj sadfd slkfdslfk dlsfjjsd.",
//})
//  .then((data)=> console.log(data))
//  .catch((err) => console.log(err));

//Request.put("https://jsonplacehholder.typicode.com/posts/1", {
//    userId:100,
//    id:100,
//    title:"deneme",
//    body: "adsadjhfj sadfd slkfdslfk dlsfjjsd.",
//})
//  .then((data)=> console.log(data, "Başarılı"))
//  .catch((err) => console.log(err));

Request.delete("https://jsonplacehholder.typicode.com/posts/1")
  .then((data)=> console.log(data))
  .catch((err) => console.log(err));


