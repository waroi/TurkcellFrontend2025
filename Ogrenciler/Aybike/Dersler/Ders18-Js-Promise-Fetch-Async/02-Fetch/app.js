class Request{
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }
    static post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-type':'application/json; charset=UTF-8'
                }
            })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }

    static put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                body:JSON.stringify(data),
                headers:{
                    'Content-type':'application/json; charset=UTF-8'
                }
            })
            .then(response=>response.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err));
        });
    }

    static delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE'
            })
            .then(response=>resolve('Veri silme işlemi başarılı'))
            .catch(err=>reject(err));
        });
    }

}

Request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(data=>console.log(data))
.catch(err=>console.log(err));

