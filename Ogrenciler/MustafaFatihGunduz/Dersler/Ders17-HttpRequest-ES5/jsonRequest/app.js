document.querySelector('.btn').addEventListener('click',getAllData);

function getAllData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','./users.json',true);
    xhr.onload = function(){
        let list = document.getElementById('employees');
        if(this.status === 200){
            const data = JSON.parse(this.responseText);
            data.forEach(emp => {
                list.innerHTML += ` <tr> 
                <td>${emp.name}</td>
                <td>${emp.surname}</td>
                <td>${emp.age}</td>
                <td>${emp.salary}</td>
                </tr>`; 
            });
        }
    }
    xhr.send();
}