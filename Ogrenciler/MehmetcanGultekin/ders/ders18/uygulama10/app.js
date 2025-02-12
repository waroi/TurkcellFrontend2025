class Request{
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

}


Request.get("https://jsonplaceholder.typicode.com/posts")
.then(posts => posts.forEach(post => {
    UI.getPost(post);
}))
.catch(err => console.error(err));

