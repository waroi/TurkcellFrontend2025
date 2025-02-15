function getData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof data ==="string"){
                console.log("Sonuç olumlu");
                resolve("Data alındı");
            }
            else{
                console.log("Sonuç olumsuz");
                reject("Data alınamadı");
            }
        }, 2000);
    });
}

getData("Merhaba").then(function(response){
    console.log("Gelen değer: " + response);
}
).catch(function(err){
    console.log(err);
}
);