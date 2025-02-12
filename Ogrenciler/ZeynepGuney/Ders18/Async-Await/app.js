// async'i kullanmak için await yazmak gerekiyordu bu değişti fakat bu halini göreceğiz
// bazı tarayıcılar izin vermiyormuş hala
// nextjs kabul etmiyor, await istiyor

// !!! Yazılım prensiplerine bak!!!

class Request{
    async get(url){
        const response = await fetch(url);
        if (!response.ok){
            throw new Error("Bir Hata Oluştu : " + response.status);
        }
        const data = await response.json();
        return data;
    }
}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/posts")
    .then((albums) => {
        console.log(albums);
    })
    .catch((err) => {
        console.error(err);
    });