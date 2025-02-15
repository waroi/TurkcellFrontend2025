// Ecmascript 2022den itibaren artık async olmadan await kullanılır ama hangi tarayıcılar destekler?***********


class Request {
    static async get(url) {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Bir hata oluştu:', response.status)
        }
        const data = await response.json()
        return data
    }
}

Request.get('https://jsonplaceholder.typicode.com/albums').then(albums => {
    console.log(albums)
})
    .catch(err => console.log(err))