function getData(data){
    return new Promise(function (resolve, reject) {
        setTimeout( () => {
            if (typeof data ==="string"){
                console.log('Sonuç olumlu', data);
                resolve("Data alındı");
            } else{
                console.log('Sonuç olumsuz', data);
                resolve("Data alınamadı");
            }
        })
    })
}