let addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.querySelector(".card-list");

        let taskCard = document.createElement("div");
        taskCard.className = "p-3 mb-2 bg-light";

        let taskTextSpan = document.createElement("span");
        taskTextSpan.innerText = taskText;
        taskTextSpan.className = "task-text";

        let taskButtonsAndInfo = document.createElement("div");
        taskButtonsAndInfo.className = "row d-flex justify-content-center align-items-center";

        let taskComplete = document.createElement("button");
        let taskDelete = document.createElement("button");
        let taskEdit = document.createElement("button");
        let taskInfo = document.createElement("span");
        let taskPhoto = document.createElement("img");

        taskComplete.className = "complete";
        taskDelete.className = "delete";
        taskEdit.className = "edit";
        taskInfo.className = "info";
        taskPhoto.className = "photo";
        taskPhoto.src = "assets/avatar.jpg";
        let taskCompleteIcon = document.createElement("i");
        taskCompleteIcon.className = "fa-solid fa-check";

        let taskDeleteIcon = document.createElement("i");
        taskDeleteIcon.className = "fa-solid fa-trash";

        let taskEditIcon = document.createElement("i");
        taskEditIcon.className = "fa-solid fa-pencil";

        let taskInfoText = document.createTextNode("Task Info");


        taskComplete.appendChild(taskCompleteIcon);
        taskDelete.appendChild(taskDeleteIcon);
        taskEdit.appendChild(taskEditIcon);
        
        

        taskList.appendChild(taskCard);
        taskCard.appendChild(taskTextSpan);
        taskCard.appendChild(taskButtonsAndInfo);


        taskButtonsAndInfo.appendChild(taskPhoto);
        taskButtonsAndInfo.appendChild(taskInfoText);
        taskButtonsAndInfo.appendChild(taskComplete);
        taskButtonsAndInfo.appendChild(taskDelete);
        taskButtonsAndInfo.appendChild(taskEdit);

        taskInput.value = "";

        taskComplete.addEventListener("click", completeTask);
        taskDelete.addEventListener("click", deleteTask);
        taskEdit.addEventListener("click", editTask);
    }
}

function completeTask() {
    let taskCard = this.parentElement.parentElement;
    let taskText = taskCard.querySelector(".task-text");

    if (taskText) {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "green";
    }
}

function deleteTask() {
    let taskCard = this.parentElement.parentElement;
    taskCard.remove();
}

function editTask() {
    let taskCard = this.parentElement.parentElement;
    let taskText = taskCard.querySelector(".task-text");

    let taskInput = document.getElementById("task-input");
    taskInput.value = taskText.innerText;
    taskCard.remove();
    
}
