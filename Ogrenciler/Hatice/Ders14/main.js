// Select HTML properties which we need to use
const TASKDOM = document.querySelector("#task");
const LISTDOM = document.querySelector("#list");
const TODOLIST = localStorage.getItem("todolist");
const BTNADD = document.querySelector("#liveToastBtn");
const TOAST = document.querySelectorAll("#liveToast");

// If there is a list in local storage get the list
if (TODOLIST) LISTDOM.innerHTML = JSON.parse(TODOLIST);

function newElement() {
  const LI = document.createElement("li");
  const TASK = TASKDOM.value.trim(); // set TASK value to input and remove white space

  if (TASK) {
    LI.textContent = TASK;
    if (LI) {
      const DLTSPN = document.createElement("span");
      DLTSPN.innerHTML = "&times;";
      DLTSPN.classList.add("close");
      DLTSPN.addEventListener("click", () => removeElement(LI));
      LI.appendChild(DLTSPN);
      LISTDOM.appendChild(LI);
      $(TOAST[0]).toast("show");
      TASKDOM.value = ""; // resets input space
      saveToLocalStorage(LISTDOM);
    }
  } else {
    $(TOAST[1]).toast("show");
    return;
  }

  // Select task item to checked
  LI.addEventListener("click", () => {
    if (LI.classList.contains("checked")) LI.classList.remove("checked");
    else LI.classList.add("checked");
    saveToLocalStorage(LISTDOM);
  });
}

// Listener to check class and save to local storage
document.querySelectorAll("#list > li").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("checked")) item.classList.remove("checked");
    else item.classList.add("checked");
    saveToLocalStorage(LISTDOM);
  });
});

// Listener to delete task and save to local storage
document.querySelectorAll("#list span").forEach((item) => {
  let li = item.parentNode;
  item.addEventListener("click", () => {
    removeElement(li);
  });
});

// Function to remove element
const removeElement = (element) => {
  element.remove();
  saveToLocalStorage(LISTDOM);
};

// Add and event listener to input field to create a new list item on enter key press
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") newElement();
});

// Save HTML for local storage function
function saveToLocalStorage(item) {
  localStorage.setItem("todolist", JSON.stringify(item.innerHTML));
}