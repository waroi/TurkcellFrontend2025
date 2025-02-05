let addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", addTask);
let isCompleted = false;
let isInProgress = false;
let isInReview = false;

function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.querySelector(".to-do-list");
        let taskCard = document.createElement("div");
        taskCard.className = "p-3 mb-2 rounded-pill";

        let taskTextSpan = document.createElement("span");
        taskTextSpan.innerText = taskText;
        taskTextSpan.className = "task-text";

        let taskButtonsAndInfo = document.createElement("div");
        taskButtonsAndInfo.className = "row d-flex align-items-center";

        let taskComplete = document.createElement("button");
        let taskInReview= document.createElement("button");
        let taskInProgress = document.createElement("button");
        let taskDelete = document.createElement("button");
        let taskEdit = document.createElement("button");
        let taskPhoto = document.createElement("img");

        taskInProgress.className = "in-progress";
        taskInReview.className = "in-review";
        taskComplete.className = "complete";
        taskDelete.className = "delete";
        taskEdit.className = "edit";
        taskPhoto.className = "photo";
        taskPhoto.src = "assets/avatar.jpg";
    
        let taskInReviewIcon = document.createElement("i");
        taskInReviewIcon.className = "fa-solid fa-book";

        let taskInProgressIcon = document.createElement("i");
        taskInProgressIcon.className = "fa-solid fa-bars-progress";

        let taskCompleteIcon = document.createElement("i");
        taskCompleteIcon.className = "fa-solid fa-check";
        
        let taskDeleteIcon = document.createElement("i");
        taskDeleteIcon.className = "fa-solid fa-trash";

        let taskEditIcon = document.createElement("i");
        taskEditIcon.className = "fa-solid fa-pencil";

        taskComplete.appendChild(taskCompleteIcon);
        taskDelete.appendChild(taskDeleteIcon);
        taskEdit.appendChild(taskEditIcon);
        taskInReview.appendChild(taskInReviewIcon);
        taskInProgress.appendChild(taskInProgressIcon);
        
        taskList.appendChild(taskCard);
        taskCard.appendChild(taskTextSpan);
        taskCard.appendChild(taskButtonsAndInfo);

        taskButtonsAndInfo.appendChild(taskPhoto);
        taskButtonsAndInfo.appendChild(taskInProgress);
        taskButtonsAndInfo.appendChild(taskInReview);
        taskButtonsAndInfo.appendChild(taskComplete);
        taskButtonsAndInfo.appendChild(taskDelete);
        taskButtonsAndInfo.appendChild(taskEdit);

        taskInput.value = "";

        taskComplete.addEventListener("click", completeTask);
        taskInReview.addEventListener("click", addInReview);
        taskInProgress.addEventListener("click", addInProgress);
        taskDelete.addEventListener("click", deleteTask);
        taskEdit.addEventListener("click", editTask);
    }
}

function completeTask() {
    let taskCard = this.parentElement.parentElement;
    let taskText = taskCard.querySelector(".task-text");
    if (taskText) {
        taskCard.style.backgroundColor = "#28a745";
        taskText.style.textDecoration = "line-through";
        isCompleted = true;
    }
    if(isCompleted){
        let doneList = document.querySelector(".done-list");
        doneList.appendChild(taskCard);
    }
}

function addInProgress() {
    let taskCard = this.parentElement.parentElement;
    let taskText = taskCard.querySelector(".task-text");
    isInProgress = true;
    if(isInProgress){
        isCompleted = false;
        if (!isCompleted) {
            taskText.style.textDecoration = "none";
        }
        taskCard.style.backgroundColor = "#007bff";
        let inProgressList = document.querySelector(".in-progress-list");
        inProgressList.appendChild(taskCard);
    }
}

function addInReview() {
    let taskCard = this.parentElement.parentElement;
    let taskText = taskCard.querySelector(".task-text");
    isInReview = true;
    if(isInProgress){
        isCompleted = false;
        if (!isCompleted) {
            taskText.style.textDecoration = "none";
        }
        taskCard.style.backgroundColor = "#DD88CF";
        let inReviewList = document.querySelector(".in-review-list");
        inReviewList.appendChild(taskCard);
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