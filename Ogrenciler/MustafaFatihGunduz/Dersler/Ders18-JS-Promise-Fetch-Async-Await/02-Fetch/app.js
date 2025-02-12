// function getTextFile() {
//     fetch("text.txt").then(response => {
//         return response.text().then(text => { console.log(text) });
//     }).catch(err => {
//         console.error(err)
//     });
// }

// getTextFile();

// function getJsonFile() {
//     fetch("users.json").then(response => {
//         return response.json().then(text => { console.log(text) }); //* response.json demezsek array olarak alamayız. 
//     }).catch(err => {
//         console.error(err)
//     });
// }

// getJsonFile();

// function getAPI() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//         return response.json().then(text => { console.log(text) }); //* response.json demezsek object olarak alamayız. 
//     }).catch(err => {
//         console.error(err)
//     });
// }

// getAPI();

class Request { 
  static get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    static post (url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json;"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    static put (url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json;"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    
    static delete (url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => resolve("Veri Silme İşlemi Başarılı"))
            .catch(err => reject("Veri Silme İşlemi Başarısız"));
        });
    }  
}

// Request.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
//     console.log(posts);
// }).catch(err => {
//     console.error(err);
// });

// Request.post("https://jsonplaceholder.typicode.com/posts", {userId: 121412, id:101, title: "new title", body: "new body"}).then(newPost => {
//     console.log(newPost);
// }).catch(err => {
//     console.error(err);
// });

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {userId: 121412, id:0, title: "new title", body: "new body"}).then(newPost => {
//     console.log(newPost, "Başarılı");
// }
// ).catch(err => {
//     console.error(err);
// });

// Request.delete("https://jsonplaceholder.typicode.com/posts/1").then(message => {
//     console.log(message);
// }).catch(err => {
//     console.error(err);
// });