document.getElementById('btn').addEventListener('click', fetchData);

function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = function (){
        let list = document.getElementById('output');
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            data.forEach(post => {
                list.innerHTML += `<li>${post.name}</li> <li>${post.body}</li>`;
                
            });
        
    }
    }
    xhr.send();
}