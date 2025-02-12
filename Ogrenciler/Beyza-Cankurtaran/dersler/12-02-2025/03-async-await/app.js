class Request{
    async get(url){
        const response=await fetch(url);
        if(!response.ok)throw new Error("bir hata oluştu"+response.status);
        const data=await response.json();
        return data;
    }
}
const request=new Request();
request.get("https://jsonplaceholder.typicode.com/albums")
.then((albums)=> {
    console.log(albums);
})
.catch((err)=>{
    console.error(err);
});