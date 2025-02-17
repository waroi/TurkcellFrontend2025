function getData(data){
    return new Promise(
        function (resolve,reject){
            setTimeout(()=>{
                if (typeof data === "string"){
                    console.log("Sonuç Olumlu, Data Alındı");
                    resolve("Data alındı");
                } else {
                    console.log("Sonuç Olumsuz, Data Alınamadı.")
                        reject("Data Alınamadı")
                    
                }
            },2000)
        }
    )
}

getData("Deneme").then((response)=>{console.log(response)}).catch((err)=>{console.error(err)})

array.forEach()