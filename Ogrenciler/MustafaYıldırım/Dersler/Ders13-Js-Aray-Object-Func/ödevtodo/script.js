let todoList = [];
//ekleme, silme,kontrol,göürntüleme
function addTodo(task) {
  let newTask = {
    //birinci eleman
    id: todoList.length + 1,
    task: task,
    control: false,
  };
  todoList.push(newTask);
}
function removeTodo(id) {
  let index = todoList.findIndex((task) => task.id == id);
  todoList.splice(index, 1);
}
function controlTodo(id) {
  let task = todoList.find((task) => task.id == id);
  task.control = true;
}
function listTodo() {
  if (todoList.length === 0) {
    console.log("📭 Yapılacaklar listesi boş.");
    return;
  }
  for (let i = 0; i < todoList.length; i++) {
    console.log(
      `durum:${todoList[i].control},id:${todoList[i].id},tasks:${todoList[i].task}`
    );
  }
}
addTodo("Javascript çalış!!!");
addTodo("CSS çalış!!!");
addTodo("HTML çalış!!!");
listTodo();
console.log("----------------------------------------------------------------");
removeTodo(1);
listTodo();
console.log("----------------------------------------------------------------");
controlTodo(3);
listTodo();
