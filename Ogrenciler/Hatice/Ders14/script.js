const task = document.querySelector("#task");
const btn = document.querySelector("#AddBtn");
const ToDoList = document.querySelector("#list");

const ToDo = [
    { task: 'JavaScript çalış', completed: false },
    { task: 'Ödev yap', completed: false },
    { task: 'Finallere Çalış', completed: false },
    { task: 'Bütlere Çalış', completed: false },
];

btn.addEventListener("click", function () {
    if (task.value !== "") {
        ToDo.push({ task: task.value, completed: false });
        task.value = "";
        showTodos();
    } else {
        alert("Boş bırakamazsınız!");
    }
});

function showTodos() {
    ToDoList.innerHTML = "";

    for (let i = 0; i < ToDo.length; i++) {
        let todo = ToDo[i];
        let li = document.createElement("li");
        li.className = `list-group-item d-flex align-items-center justify-content-between ${todo.completed ? "doneTodo" : ""}`;
        li.innerHTML = `
            ${todo.task}
            <div class="icons">
                <a href="#" class="editTodo">Düzenle</a>
                <a href="#" class="removeTodo ms-4">Sil</a>
            </div>
        `;

        li.querySelector(".editTodo").addEventListener("click", function () {
            let newTask = prompt("Yeni görev:", todo.task);
            if (newTask && newTask.length > 1) {
                ToDo[i].task = newTask;
                showTodos();
            }
        });

        li.querySelector(".removeTodo").addEventListener("click", function () {
            ToDo.splice(i, 1);
            showTodos();
        });

        li.addEventListener("click", function (event) {
            if (!event.target.classList.contains("editTodo") && !event.target.classList.contains("removeTodo")) {
                todo.completed = !todo.completed;
                showTodos();
            }
        });

        ToDoList.appendChild(li);
    }
}

showTodos();
