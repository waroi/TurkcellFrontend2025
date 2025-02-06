const ekleButon = document.querySelector(".ekle");
ekleButon.addEventListener("click", ekleFunction);

function ekleFunction() {
  const inputText = document.querySelector(".input");
  let inputValue = inputText.value.trim();
  const liste = document.querySelector(".list");

  if (inputValue === "") return;

  let listeEleman = document.createElement("li");
  listeEleman.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  const index = liste.children.length + 1;
  const span = document.createElement("span");
  span.textContent = `${index}. ${inputValue}`;

  const buttonGroup = document.createElement("div");
  const editButton = document.createElement("button");
  const editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen-to-square";
  editButton.appendChild(editIcon);
  editButton.classList.add(
    "btn",
    "btn-sm",
    "btn-warning",
    "me-1",
    "text-white"
  );
  editButton.addEventListener("click", () => {
    let newTask = prompt("Yeni görev isminizi giriniz: ", span.textContent);
    if (newTask !== null) {
      span.textContent = newTask;
    }
  });

  const checkButton = document.createElement("button");
  const checkIcon = document.createElement("i");
  checkIcon.className = "fa-solid fa-check";
  checkButton.appendChild(checkIcon);
  checkButton.classList.add("btn", "btn-sm", "btn-success", "me-1");
  checkButton.addEventListener("click", () => {
    listeEleman.classList.toggle("text-decoration-line-through");
    listeEleman.classList.toggle("bg-success");
    listeEleman.classList.toggle("text-white");
  });

  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash";
  deleteButton.classList.add("btn", "btn-sm", "btn-danger", "me-1");

  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener("click", () => {
    let confirmDelete = confirm(
      `"${inputValue}" görevini silmek istediğinize emin misiniz?`
    );
    if (confirmDelete) liste.removeChild(listeEleman);
  });

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(checkButton);
  buttonGroup.appendChild(deleteButton);

  listeEleman.appendChild(span);
  listeEleman.appendChild(buttonGroup);

  liste.appendChild(listeEleman);
  inputText.value = "";
}

const silButton = document.querySelector(".sil");
