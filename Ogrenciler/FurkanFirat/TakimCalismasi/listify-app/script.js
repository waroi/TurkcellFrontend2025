const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');
const addButton = document.querySelector('#add-button');

let updateTask = null;

addButton.addEventListener('click', addNewTask);

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addNewTask();
  }
});

function addNewTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  if (updateTask) {
    updateTask.firstChild.textContent = taskText;
    updateTask = null;
    addButton.textContent = 'Add';
    taskInput.value = '';
    storeData();
    taskInput.focus();
    return;
  }
  const taskItem = document.createElement('li');
  taskItem.classList.add(
    'alert',
    'alert-light',
    'd-flex',
    'flex-wrap',
    'align-items-center',
    'justify-content-between'
  );

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('d-flex', 'align-items-center');

  const completeButton = document.createElement('button');
  completeButton.classList.add('btn', 'btn-sm', 'btn-outline-success', 'me-2');
  completeButton.innerHTML = '<i class="bi bi-check-lg"></i>';
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('text-decoration-line-through');
    taskItem.classList.toggle('alert-light');
    taskItem.classList.toggle('alert-success');
    storeData();
  });

  const closeButton = document.createElement('button');
  closeButton.classList.add('btn-close');
  closeButton.addEventListener('click', () => {
    taskItem.remove();
    storeData();
  });

  const updateButton = document.createElement('button');
  updateButton.classList.add('btn', 'btn-sm', 'btn-primary', 'me-2');
  updateButton.innerHTML = '<i class="bi bi-pencil"></i>';
  updateButton.addEventListener('click', () => {
    taskInput.value = taskItem.firstChild.textContent;
    updateTask = taskItem;
    addButton.textContent = 'Update';
    storeData();
    taskInput.focus();
  });

  actionsDiv.append(updateButton, completeButton, closeButton);
  taskItem.append(taskInput.value, actionsDiv);
  taskList.append(taskItem);

  taskInput.value = '';
  taskInput.focus();
  storeData();
}

function storeData() {
  localStorage.setItem('data', taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem('data');
}

showData();
