// // Text dosyasından GET isteği
// function getTextFile() {
//     fetch('veri.txt').then(response => response.text()) // gelen datayı return ediyor
//         .then(data => console.log(data)) // datayı yakalıoyr ve consolea yazıyor
//         .catch(err => console.warn(err)) // hata varsa consolea yazıyor
// }

// getTextFile()

// // Json dosyasından GET isteği
// function getJsonFile() {
//     fetch('users.json')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// getJsonFile()

// // URL'den(endpointten) GET isteği
// function getApi() {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// getApi()




class Request {
    static get(url) {
        // İşlemi bir promise olarak yaptık data okayse resolve değilse reject
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    static put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    static delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
            })
                .then(response => response.json())
                .then(data => resolve('Veri silme işlemi başarılı'))
                .catch(err => reject('Hata silme işlemi başarısız'))
        })
    }
}


// Request.get('https://jsonplaceholder.typicode.com/comments')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// Request.post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 1,
//     id: 23,
//     title: 'title',
//     body: 'body'

// }).then(data => console.log(data))
//     .catch(err => console.log(err))


// Request.put("https://jsonplaceholder.typicode.com/posts/23", {
//     userId: 1,
//     id: 23,
//     title: 'title',
//     body: 'body'

// }).then(data => console.log(data, 'güncelleme başarılı'))
//     .catch(err => console.log(err))


Request.delete('https://jsonplaceholder.typicode.com/comments/23')
    .then(data => console.log(data))
    .catch(err => console.log(err))


// parametre olarak fonksiyon verme örneği
// function cube(a) {
//     return a * a * a
// }

// function deneme(a) {
//     return a(3)
// }

// console.log(deneme(cube))