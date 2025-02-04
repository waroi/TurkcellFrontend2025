taskInput = document.getElementById('taskInput')
taskList = document.getElementById('taskList')

const addFunc = () => {
  const task = document.createElement('li')
  task.id = `li${taskList.childElementCount}`
  const taskP = document.createElement('p')
  taskP.textContent = taskInput.value
  taskP.className = `${taskList.childElementCount}`
  taskP.id = `${taskList.childElementCount}`
  task.appendChild(taskP)
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'görevi sil'
  deleteButton.addEventListener('click', () => deleteTask(task.id))
  task.appendChild(deleteButton)

  const completeButton = document.createElement('button')
  completeButton.textContent = 'görevi tamamla'
  completeButton.addEventListener('click', () => completeTask(taskP.id))
  task.appendChild(completeButton)

  const updateButton = document.createElement('button')
  updateButton.textContent = 'görevi güncelle'
  updateButton.setAttribute('data-bs-toggle', 'modal')
  updateButton.setAttribute('data-bs-target', '#exampleModal')
  updateButton.className = 'btn btn-primary'
  updateButton.addEventListener('click', () => updateTask(taskP.id))
  task.appendChild(updateButton)

  taskList.appendChild(task)
}

taskButton = document.getElementById('taskButton')
taskButton.addEventListener('click', addFunc)

const deleteTask = id => {
  deleted = document.getElementById(id)
  taskList.removeChild(deleted)
}
const completeTask = id => {
  completed = document.getElementById(id)
  completed.className = 'completed-task'
}

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
