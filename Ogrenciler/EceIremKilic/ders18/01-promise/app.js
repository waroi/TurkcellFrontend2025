function getData(data){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(typeof data == string){
                console.log("Sonuç olumlu");
                resolve("Data alındı.");
            } else {
                console.log("sonuç olumsuz");
                reject("data alınamadı");
            }
        }, 2000)
    })
}

getData("deneme")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })