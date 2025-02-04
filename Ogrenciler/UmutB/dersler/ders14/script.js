let undone = [];
let progress = [];
let done = [];

const save = document
  .getElementById("save")
  .addEventListener("click", saveFunction);
const edit_btn = document
  .getElementById("edit")
  .addEventListener("click", editFunction);

function saveFunction() {
  let task_title = document.getElementById("task-title");
  let task_detail = document.getElementById("task-detail");
  if (task_title.value.trim() == "" || task_detail.value.trim() == "") {
    alert("Hatalı bilgi girdiniz!");
  } else {
    undone.push({ title: task_title.value, detail: task_detail.value });
    task_title.value = null;
    task_detail.value = null;
    createTask(undone);
  }
}

function createTask(list) {
  let li = document.createElement("li");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let button = document.createElement("a");
  button.id = "edit";
  button.className = "btn btn-warning";
  button.type = "button";
  button.dataset.bsToggle = "modal";
  button.dataset.bsTarget = "#editModal";
  const text = document.createTextNode("Edit");
  button.appendChild(text);
  li.className = "task";
  const title = document.createTextNode(list[list.length - 1].title);
  h4.appendChild(title);
  const detail = document.createTextNode(list[list.length - 1].detail);
  p.appendChild(detail);
  const ul = document.getElementById("undone");
  ul.appendChild(li);
  li.appendChild(h4);
  li.appendChild(p);
  li.append(button);
}

function editFunction() {
  let p = this.parentElement;
  console.log(p);
}
