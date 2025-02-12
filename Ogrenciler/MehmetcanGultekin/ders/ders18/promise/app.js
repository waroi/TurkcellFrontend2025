function getData(data){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(typeof data === "string"){
                console.log('String veri tipi alındı')
                resolve("data alındı")
        } else {
            reject("data alınamadı")
        }
    },2000)
    })
}

getData("Merhaba")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})