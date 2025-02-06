const task = document.querySelector("#task");
const btn = document.querySelector("#AddBtn");
const ToDoList = document.querySelector("#list");
const todoCounter = document.querySelector('.todo-count')
const removeButton = document.querySelector('.remove-all-todos')
let ToDo = [
    {
        task: 'JavaScript çalış',
        completed: false,
    }, {
        task: 'Ödev yap',
        completed: false,
    }, {
        task: 'Finallere Çalışma',
        completed: false,
    }, {
        task: 'Bütlere Çalış',
        completed: false,
    },
]

btn.addEventListener("click", addtodo);
removeButton.addEventListener('click', removeAllTodos)

function removeAllTodos() {
    if (confirm('Tüm todoları silmek istediğinize emin misiniz?')) {

        ToDo = []
        todoCounter.innerHTML = ToDo.length
        showTodos()
    }
}

function addtodo() {
    if (task.value.length !== 0) {
        ToDo.push({
            task: task.value,
            completed: false,
        })
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
        li.className = 'list-group-item d-flex align-items-center justify-content-between'
        li.innerHTML = todoList[i].task

        let div = document.createElement('div')
        div.className = 'icons editTodo'
        let editLink = document.createElement('a')
        editLink.href = '#'
        editLink.className = 'editTodo'
        editLink.innerHTML = 'Düzenle'

        let removeLink = document.createElement('a')
        removeLink.href = '#'
        removeLink.className = 'removeTodo ms-4'
        removeLink.innerHTML = 'Sil'

        div.appendChild(editLink)
        div.appendChild(removeLink)
        li.appendChild(div)

        if (ToDo[i].completed === true) {
            li.classList.add('doneTodo')
        }

        editLink.addEventListener('click', function () {
            editText(i, ToDo[i].completed)
        })

        removeLink.addEventListener('click', function () {
            ToDo.splice(i, 1)
            showTodos(ToDo)
        })

        li.addEventListener('click', function (event) {
            if (!event.target.classList.contains('editTodo') && !event.target.classList.contains('removeTodo')) {
                addClass(li, i);
            }
        })

        ToDoList.appendChild(li)
    }
    todoCounter.innerHTML = ToDo.length

}

function editText(index, check) {
    let newTask = prompt('Yeni görev ne olsun? (En az 1 karakter)', ToDo[index].task);
    if (newTask !== '' && newTask.length > 1) {
        ToDo[index].task = newTask;
        showTodos(ToDo);
        ToDo[index].completed = check
    }
}

function addClass(li, index) {
    if (ToDo[index].completed === true) {
        li.className = 'list-group-item d-flex align-items-center justify-content-between'
        ToDo[index].completed = false
    } else {
        li.className = 'list-group-item d-flex align-items-center justify-content-between doneTodo'
        ToDo[index].completed = true
    }
}

showTodos(ToDo)