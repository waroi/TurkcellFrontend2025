//promise nedir?
//benim x kişisine borcum var bende y kişisine borç vermişim 
//bende x benden borcunu geri istediğinde ya y den alabilsem vericem diyorum
function getData(data) {
    return new Promise(function(resolve, reject){//res,rej de yazabilirdim
        setTimeout(() => {
            if (typeof data === 'string') {
                resolve("Data alındı");
                console.log("sonuç olumlu ,data  alınıdı",data);
            } else {
                console.log("sonuç olumsuz");
                reject("data alınmadı");

            }
        }, 2000);
    })

};
getData("merhaba")
.then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err);    
})
