const task = document.querySelector("#task");
const btn = document.querySelector("#AddBtn");
const ToDoList = document.querySelector("#list");
const ToDo = []

btn.addEventListener("click", addtodo);

function addtodo() {
    if (task.value.length !== 0) {
        ToDo.push(task.value)
        task.value = ''

        showTodos(ToDo)
    } else {
        alert('Boş bırakamazsınız')
    }

}

function showTodos(todoList) {

    ToDoList.innerHTML = ''
    for (let i = 0; i < todoList.length; i++) {
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.innerHTML = todoList[i]

        li.addEventListener('click', addClass(li))

        ToDoList.appendChild(li)

    }


}


function addClass(li) {
    // for (let i = 0; i < todos.length; i++) {

    //     todos[i].addEventListener('click', () => {
    //         console.log(todos[i])
    //         if (todos[i].classList === 'list-group-item d-flex align-items-center justify-content-between doneTodo') {
    //             todos[i].classList = 'list-group-item d-flex align-items-center justify-content-between'
    //         } else {
    //             todos[i].classList === 'list-group-item d-flex align-items-center justify-content-between doneTodo'
    //         }
    //     })
    // }

    console.log(li)
    if (li.classList === 'list-group-item d-flex align-items-center justify-content-between doneTodo') {
        li.classList = 'list-group-item d-flex align-items-center justify-content-between'
    } else {
        li.classList === 'list-group-item d-flex align-items-center justify-content-between doneTodo'
    }
}

