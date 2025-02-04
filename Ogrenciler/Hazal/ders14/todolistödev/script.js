document.getElementById('addTodoBtn').onclick = function() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput) {
        addTodo(todoInput);
        document.getElementById('todoInput').value = '';
        document.getElementById('emojiInput').value = '';
    }
};

function addTodo(todo) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerText = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.innerText = 'Sil';
    deleteBtn.onclick = function() {
        li.remove();
    };

    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-success btn-sm';
    completeBtn.innerText = 'Tamamla';
    completeBtn.onclick = function() {
        li.classList.toggle('list-group-item-success');
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    document.getElementById('todoList').appendChild(li);
}