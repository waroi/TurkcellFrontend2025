const container = document.querySelector('.post-container');
function getData(url,data){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>resolve(data))
        .catch(err=>reject(err))
    })
}

getData('https://jsonplaceholder.typicode.com/posts').then(data => {
    data.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card mb-3 py-3 px-2';
        const body = document.createElement('div');
        body.className = 'card-body mb-3 py-2 px-2';
        const title = document.createElement('h5');
        title.className = 'card-title text-black fs-5 text-uppercase';
        title.textContent = post.title;
        const text = document.createElement('p');
        text.className = 'card-text text-muted';
        text.textContent = post.body;
        body.appendChild(title);
        body.appendChild(text);
        card.appendChild(body);
        container.appendChild(card);  
        console.log(post);
});
}).catch(err => {
    console.log(err);
});
