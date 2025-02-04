const taskInput = document.querySelector("#task-input");
const list = document.querySelector("ul");

function gorevEkle(text) {
  let todoText = taskInput.value.trim();
  if (!text && todoText === "") return;

  let li = document.createElement("li");
  li.className = "list-group-item task p-2 mb-2 rounded border";
  let div = document.createElement("div");
  div.className = "d-flex align-items-center";
  let input = document.createElement("input");
  input.className = "form-check-input me-3";
  input.setAttribute("type", "checkbox");
  input.setAttribute("onclick", "gorevToggle(this)");
  let p = document.createElement("p");
  p.className = "mb-0 flex-grow-1";
  p.textContent = text ? text : todoText;
  let group = document.createElement("div");
  group.className = "btn-group";
  let updateButton = document.createElement("button");
  let deleteButton = document.createElement("button");

  updateButton.classList = "btn btn-warning btn-sm text-white";
  deleteButton.classList = "btn btn-danger btn-sm";
  updateButton.textContent = "Güncelle";
  deleteButton.textContent = "Sil";
  updateButton.setAttribute("onclick", "gorevGuncelle(this)");
  deleteButton.setAttribute("onclick", "gorevSil(this)");

  group.appendChild(updateButton);
  group.appendChild(deleteButton);
  div.appendChild(input);
  div.appendChild(p);
  div.appendChild(group);
  li.appendChild(div);
  list.appendChild(li);

  taskInput.value = "";
}
function gorevGuncelle(button) {
  let content = button.parentElement.parentElement.children[1];

  if (!content.getAttribute("contenteditable"))
    content.setAttribute("contenteditable", "true");
  else content.removeAttribute("contenteditable");

  content.addEventListener("blur", () =>
    content.removeAttribute("contenteditable")
  );
}
function gorevSil(button) {
  button.parentElement.parentElement.parentElement.remove();
}
function gorevToggle(checkbox) {
  checkbox.parentElement.children[1].classList.toggle(
    "text-decoration-line-through"
  );
  checkbox.parentElement.children[2].children[0].classList.toggle("disabled");
}

gorevEkle("Task list yaz.");
gorevEkle("Sunum yap.");

document.querySelector("ul input").checked = true;
gorevToggle(document.querySelector("ul input"));

let degree = 0;
setInterval(() => {
  degree = (degree + 1) % (360 * 5);
  document.body.style.backgroundImage = `linear-gradient(${
    degree / 5
  }deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%)`;
}, 10);
