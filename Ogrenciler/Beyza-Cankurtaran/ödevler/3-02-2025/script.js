function gorevEkle() {
    let input = document.getElementById("input");
    let todoText = todoInput.value.trim();
    if (todoText === "") return;

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
                <span>${todoText}</span>
                <div>
                    <button class="btn btn-success btn-sm" onclick="completeTodo(this)">Tamamla</button>
                    <button class="btn btn-warning btn-sm" onclick="editTodo(this)">Düzenle</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTodo(this)">Sil</button>
                </div>
            `;

    document.getElementById("todoList").appendChild(li);
    todoInput.value = "";
}
function gorevGuncelle() {

}
function gorevSil() {

}
function gorevTamamla() {

}