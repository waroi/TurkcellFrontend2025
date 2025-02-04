let value = document
  .getElementById("addTodo")
  .addEventListener("click", function () {
    let todoText = document.getElementById("todo-input").value;
    if (todoText === "") return;

    let li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center mb-2";
    li.textContent = todoText;

    let buttonGroup = document.createElement("div");
    buttonGroup.className = "btn-group gap-2 ms-auto";

    let completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-success btn-sm ms-2 rounded-5";
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener("click", function () {
      li.classList.add("completed");
      li.classList.toggle("bg-success");
      li.classList.toggle("text-white");
    });

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm rounded-5";
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener("click", function () {
      let newText = prompt("Yeni görevi giriniz: ", li.textContent);
      if (newText !== null) {
        li.firstChild.textContent = newText;
      }
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm rounded-5";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener("click", function () {
      setTimeout(() => li.remove(), 300);
    });

    document.getElementById("todo-list").appendChild(li);
    li.appendChild(buttonGroup);
    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    document.getElementById("todo-input").value = "";
  });
