// alert("✵ Hoşgeldiniz ✵");

let undone = [];
let progress = [];
let done = [];

const save = document
  .getElementById("save")
  .addEventListener("click", saveFunction);
const save_changes = document
  .getElementById("save-changes")
  .addEventListener("click", saveChangesFunction);
let last_changed_item;

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
    console.log(undone, progress, done);
  }
}
function saveChangesFunction() {
  const modal_body =
    this.parentElement.parentElement.getElementsByClassName("modal-body")[0];
  let title = modal_body.querySelector("input").value;
  let detail = modal_body.querySelector("textarea").value;
  last_changed_item.querySelector("h4").textContent = title;
  last_changed_item.querySelector("p").textContent = detail;
}

function createTask(list) {
  const ul = document.getElementById("undoneList");
  document.getElementById("undoneList").className = "list-unstyled";
  let li = document.createElement("li");
  let h4 = document.createElement("h4");
  let p = document.createElement("p");
  let button = document.createElement("a");
  button.addEventListener("click", editFunction);
  button.id = "edit";
  button.className = `btn btn-warning me-2`;
  button.type = "button";
  button.dataset.bsToggle = "modal";
  button.dataset.bsTarget = "#editModal";
  const text = document.createTextNode("Edit");
  button.appendChild(text);

  let donebutton = document.createElement("a");
  donebutton.addEventListener("click", moveToDone);
  donebutton.id = "donebtn";
  donebutton.type = "button";
  donebutton.className = `btn btn-success me-2`;
  const text1 = document.createTextNode("Done");
  donebutton.appendChild(text1);

  let deleteButton = document.createElement("a");
  deleteButton.addEventListener("click", deleteTask);
  deleteButton.id = "deletebtn";
  deleteButton.className = `btn btn-danger`;
  const deleteText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteText);

  li.className = "task";
  li.setAttribute("draggable", "true");
  const title = document.createTextNode(list[list.length - 1].title);
  h4.appendChild(title);
  const detail = document.createTextNode(list[list.length - 1].detail);
  p.appendChild(detail);
  ul.appendChild(li);
  li.appendChild(h4);
  li.appendChild(p);
  li.append(button);
  li.append(donebutton);
  li.append(deleteButton);
}

function editFunction() {
  const edit_title = document.getElementById("edit-title");
  const edit_detail = document.getElementById("edit-detail");
  let parent = this.parentElement;
  let title = parent.querySelector("h4").textContent;
  let detail = parent.querySelector("p").textContent;
  edit_title.value = title;
  edit_detail.value = detail;
  last_changed_item = parent;
}

function moveToDone() {
  let parent = this.parentElement;
  done.push({
    title: parent.querySelector("h4").textContent,
    detail: parent.querySelector("p").textContent,
  });
  const ul = document.getElementById("doneList");
  document.getElementById("doneList").className = "list-unstyled";

  ul.appendChild(parent);

  parent.parentNode.replaceChild(parent, "");
}

const deleteTask = (e) => {
  const parentElement = e.target.parentElement;
  parentElement.parentNode.removeChild(parentElement);
};
