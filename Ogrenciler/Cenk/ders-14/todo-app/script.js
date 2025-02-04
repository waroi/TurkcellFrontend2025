const form = document.querySelector("form");
const ul = document.querySelector("ul");
const addButton = document.getElementById("add");
const input = document.getElementById("todo-input");

const listElement = (inputValue) => {
  const li = document.createElement("li");
  li.textContent = inputValue;
  ul.appendChild(li);

  const check = document.createElement("input");
  check.type = "checkbox";
  li.appendChild(check);

  const iconDelete = document.createElement("i");
  iconDelete.className = "fa-solid fa-trash";

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteBtn";
  deleteButton.appendChild(iconDelete);

  deleteButton.addEventListener("click", function () {
    ul.removeChild(li);
  });

  const iconEdit = document.createElement("i");
  iconEdit.className = "fa-solid fa-pencil";

  const editButton = document.createElement("button");
  editButton.className = "editBtn";
  editButton.appendChild(iconEdit);

  editButton.addEventListener("click", function () {
    let newInput = prompt(
      `Görevin şu anki hali: ${inputValue}\nYeni görevi giriniz:`
    );
    li.textContent = newInput;
    li.appendChild(check);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    inputValue = newInput;
  });

  li.appendChild(deleteButton);
  li.appendChild(editButton);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value !== "") {
    listElement(input.value);
    input.value = "";
  }
});

// // DOM elementlerini seçme
// const todoForm = document.getElementById("todo-form");
// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");

// // Todo listesi için boş array
// let todos = [];

// // Form submit olayını dinleme
// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const todoText = todoInput.value.trim();

//   if (todoText !== "") {
//     addTodo(todoText);
//     todoInput.value = "";
//   }
// });

// // Yeni todo ekleme fonksiyonu
// function addTodo(text) {
//   const todo = {
//     id: Date.now(),
//     text: text,
//     completed: false,
//   };

//   todos.push(todo);
//   renderTodo(todo);
// }

// // Todo öğesini ekrana render etme
// function renderTodo(todo) {
//   const li = document.createElement("li");
//   li.className =
//     "list-group-item d-flex justify-content-between align-items-center";
//   li.setAttribute("data-id", todo.id);

//   li.innerHTML = `
//         <div class="d-flex align-items-center">
//             <input class="form-check-input me-2" type="checkbox" ${
//               todo.completed ? "checked" : ""
//             }>
//             <span class="todo-text ${
//               todo.completed ? "text-decoration-line-through" : ""
//             }">${todo.text}</span>
//         </div>
//         <div class="btn-group">
//             <button class="btn btn-sm btn-outline-primary edit-btn">
//                 <i class="bi bi-pencil"></i>
//             </button>
//             <button class="btn btn-sm btn-outline-danger delete-btn">
//                 <i class="bi bi-trash"></i>
//             </button>
//         </div>
//     `;

//   // Checkbox değişikliğini dinleme
//   const checkbox = li.querySelector(".form-check-input");
//   checkbox.addEventListener("change", function () {
//     toggleTodo(todo.id);
//   });

//   // Düzenleme butonunu dinleme
//   const editBtn = li.querySelector(".edit-btn");
//   editBtn.addEventListener("click", function () {
//     editTodo(todo.id);
//   });

//   // Silme butonunu dinleme
//   const deleteBtn = li.querySelector(".delete-btn");
//   deleteBtn.addEventListener("click", function () {
//     deleteTodo(todo.id);
//   });

//   todoList.appendChild(li);
// }

// // Todo durumunu değiştirme
// function toggleTodo(id) {
//   const todo = todos.find((t) => t.id === id);
//   todo.completed = !todo.completed;
//   const li = todoList.querySelector(`[data-id="${id}"]`);
//   const span = li.querySelector(".todo-text");
//   span.classList.toggle("text-decoration-line-through");
// }

// // Todo düzenleme
// function editTodo(id) {
//   const li = todoList.querySelector(`[data-id="${id}"]`);
//   const todoTextElement = li.querySelector(".todo-text");
//   const todoText = todoTextElement.textContent;

//   // Mevcut metni input ile değiştir
//   const input = document.createElement("input");
//   input.type = "text";
//   input.className = "form-control";
//   input.value = todoText;

//   const parent = todoTextElement.parentElement;
//   parent.replaceChild(input, todoTextElement);
//   input.focus();

//   // Input'un dışına tıklandığında veya Enter'a basıldığında güncelle
//   function saveEdit() {
//     const newText = input.value.trim();
//     if (newText !== "") {
//       const todo = todos.find((t) => t.id === id);
//       todo.text = newText;

//       const span = document.createElement("span");
//       span.className = `todo-text ${
//         todo.completed ? "text-decoration-line-through" : ""
//       }`;
//       span.textContent = newText;

//       parent.replaceChild(span, input);
//     }
//   }

//   input.addEventListener("blur", saveEdit);
//   input.addEventListener("keyup", function (e) {
//     if (e.key === "Enter") {
//       saveEdit();
//     }
//   });
// }

// // Todo silme
// function deleteTodo(id) {
//   if (confirm("Bu görevi silmek istediğinizden emin misiniz?")) {
//     todos = todos.filter((t) => t.id !== id);
//     const li = todoList.querySelector(`[data-id="${id}"]`);
//     li.remove();
//   }
// }
