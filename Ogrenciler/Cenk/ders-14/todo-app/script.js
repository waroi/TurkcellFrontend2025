const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.getElementById("todo-input");
const deleteSelectedButon = document.getElementById("delete-checked");
const deleteAllButon = document.getElementById("delete-all");

const listElement = (inputValue) => {
  // html içinde ul açtık içine burada li elementi oluşturduk
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex align-items-center justify-content-between";

  const iconDelete = document.createElement("i");
  iconDelete.className = "fa-solid fa-trash";

  const iconEdit = document.createElement("i");
  iconEdit.className = "fa-solid fa-pencil";

  // Checkbox ekledik
  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "form-check-input me-2";

  // Görev İçeriği
  const textGorev = document.createElement("span");
  textGorev.textContent = inputValue;
  textGorev.className = "flex-grow-1"; //! metni ortada genişletmek için flex-grow kullandık

  // Delete Butonu
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm ms-2";
  deleteButton.appendChild(iconDelete);

  deleteButton.addEventListener("click", function () {
    ul.removeChild(li);
  });

  // Edit Butonu
  const editButton = document.createElement("button");
  editButton.className = "btn btn-warning btn-sm ";
  editButton.appendChild(iconEdit);

  editButton.addEventListener("click", function () {
    let newInput;
    while (true) {
      newInput = prompt(
        `Görevin şu anki hali: ${inputValue}\nYeni görevi giriniz:`
      );
      if (newInput === null) break;
      if (newInput !== "") {
        textGorev.textContent = newInput;
        inputValue = newInput;
        break;
      }
    }
  });

  ul.appendChild(li);
  li.appendChild(check);
  li.appendChild(textGorev);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value !== "") {
    listElement(input.value);
    input.value = "";
  }
});

// Seçilenleri Silme Butonu
deleteSelectedButon.addEventListener("click", function () {
  const checkLists = document.querySelectorAll("ul li input[type='checkbox']");
  //! ul içindeki li içindeki type checkedbox olan inputları aldık

  checkLists.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentElement.remove();
    }
  });
});

// Hepsini Sil
deleteAllButon.addEventListener("click", function () {
  const list = document.querySelectorAll("li");

  let deleteControl = confirm("Hepsini Silmek İstediğinize Emin Misiniz ?");

  if (deleteControl) {
    list.forEach((listEach) => {
      listEach.remove();
    });
  }
});
