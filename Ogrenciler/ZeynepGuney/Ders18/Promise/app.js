function getData(data){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            if (typeof data === "string"){
                console.log("Sonuç olumlu");
                resolve("Data alındı");
            }
            else{
                console.log("Sonuç Olumsuz");
                reject("Data Alınamadı");
            }
        }, 2000);
    });
}
getData("2") // getData içine "2" değil de 2 olarak verseydim else çalışacaktı.
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    });