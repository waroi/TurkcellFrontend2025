function getData(data){
    return new Promise(function (resolve,reject){        setTimeout(()=>{
        setTimeout({} => {
            if (typeof data === "string"){
                console.log("Sonuç Olumlu");
                resolve("Data Alındı");
            }
            else{
                console.log("Sonuç olumsuz");
                reject("Data Alınamadı");
            }
        },2000);
        

    });

