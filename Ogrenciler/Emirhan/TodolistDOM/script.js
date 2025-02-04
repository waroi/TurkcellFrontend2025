taskInput = document.getElementById('taskInput')
taskList = document.getElementById('taskList')

const addFunc = () => {

  const task = document.createElement('li')
  task.id = `li${taskList.childElementCount}`
  task.className = `liClass`
  const taskP = document.createElement('p')
  taskP.textContent = taskInput.value



  taskP.className = `taskP`
  taskP.id = `${taskList.childElementCount}`
  task.appendChild(taskP)

  const buttonDiv = document.createElement('div')
  buttonDiv.className = 'buttonDiv '



  // İkonlar
  const deleteIcon = document.createElement('i')
  deleteIcon.className = 'fa-solid fa-trash'
  const updateIcon = document.createElement('i')
  updateIcon.className = 'fa-solid fa-pen'
  const completeIcon = document.createElement('i')
  completeIcon.className = 'fa-solid fa-check'


  // Butonlar
  const completeButton = document.createElement('button')
  completeButton.className = 'btn btn-success'
  completeButton.addEventListener('click', () => completeTask(taskP.id))
  completeButton.appendChild(completeIcon)
  buttonDiv.appendChild(completeButton)

  const updateButton = document.createElement('button')
  updateButton.setAttribute('data-bs-toggle', 'modal')
  updateButton.setAttribute('data-bs-target', '#exampleModal')
  updateButton.className = 'btn btn-primary'
  updateButton.addEventListener('click', () => updateTask(taskP.id))
  updateButton.appendChild(updateIcon)
  buttonDiv.appendChild(updateButton)

  const deleteButton = document.createElement('button')
  deleteButton.className = 'btn btn-danger'
  deleteButton.addEventListener('click', () => deleteTask(task.id, taskP.id))
  deleteButton.appendChild(deleteIcon)
  buttonDiv.appendChild(deleteButton)



  if (taskInput.value === '') {
    alert('Lütfen bir görev giriniz')

  } else {
    task.appendChild(buttonDiv)
    taskList.appendChild(task)
  }
  taskInput.value = ''

}


// Fonksiyonlar


taskButton = document.getElementById('taskButton')
taskButton.addEventListener('click', addFunc)

const deleteTask = (id, taskPid) => {
  deleted = document.getElementById(id)
  deletedP = document.getElementById(taskPid)
  taskList.removeChild(deleted)
  if (deletedP.className === 'taskP') {
    point = document.getElementById('point')
    pointNumber = parseInt(point.textContent)
    pointNumber = pointNumber - 3
    point.textContent = pointNumber
  }


}

// Complete
const completeTask = id => {
  completed = document.getElementById(id)
  point = document.getElementById('point')
  pointNumber = parseInt(point.textContent)

  if (completed.className === 'completed-task') {
    completed.className = `taskP`
    pointNumber = pointNumber - 5
    point.textContent = pointNumber
  }
  else {
    completed.className = 'completed-task'
    pointNumber = pointNumber + 5
    point.textContent = pointNumber

    pElement = document.getElementById('star')
    pElement.classList.add('animate');

    // Animasyon bitince sınıfı kaldır, tekrar animasyon başlatılsın
    pElement.addEventListener('animationend', () => {
      pElement.classList.remove('animate');
    });
  }
}

// Update
const updateTask = id => {
  updated = document.getElementById(id)
  updateField = document.getElementById('updateField')
  modalBody = document.getElementsByClassName('modal-body')
  if (updateField === null) {
    const updateInput = document.createElement('input')
    updateInput.type = 'text'
    updateInput.placeholder = 'Güncellenmiş metni giriniz'
    updateInput.value = updated.textContent
    updateInput.id = 'updateField'
    modalBody[0].appendChild(updateInput)
  }
  updateTaskButton = document.getElementById('updateTaskButton')
  const updateOk = () => {
    updateField = document.getElementById('updateField')
    updated.textContent = updateField.value
  }
  updateTaskButton.addEventListener('click', updateOk)
}
