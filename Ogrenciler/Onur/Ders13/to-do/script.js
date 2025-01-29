function addTodoWithPrompt() {
  console.log("Please enter the task:");
  todo = prompt("Lütfen yapılacak işi giriniz:");
  todoList.push(todo);
  console.log("New List: " + todoList);
}

function listTodos() {
  console.log("To Do List:");
  for(let i = 0; i < todoList.length; i++) {
    console.log(`${i + 1}. ${todoList[i]}`);
  }
  alert("To Do List:\n" + todoList.join("\n"));
}

const todoList = [];
let index;
let todo = "";
let loopControl = true;

console.log(`
--------------------------------------------------------
Welcome to the To Do List application
You can add, delete, update and list your tasks
--------------------------------------------------------`);

prompt(`
Yapılacaklar Listesi uygulamasına hoşgeldiniz.
Yapılacaklar listesine eklemek, silmek, güncellemek ve listelemek için işlemler yapabilirsiniz.
Devam etmek için bir tuşa basınız.`);

while (loopControl) {
  if (todoList.length === 0) {
    alert("Yapılacaklar listesi boş.\nYeni bir görev ekleyebilirsiniz.");
    console.log("To Do List is empty.\nYou can add a new task.");
    addTodoWithPrompt();
  } else {
    let operation = prompt("1. Yeni görev ekle\n2. Görev sil\n3. Görev güncelle\n4. Listele");
    console.log("Please select the operation you want to do:\n1. Add a new task\n2. Delete a task\n3. Update a task\n4. List tasks");
    console.log("Chosen Operation: " + operation);
    switch(operation){
      case "1":
        addTodoWithPrompt();
        break;
      case "2":
        listTodos();
        index = prompt("Lütfen silmek istediğiniz görevin numarasını giriniz:");
        todoList.splice(index - 1, 1);
        console.log("New List: " + todoList);
        break;
      case "3":
        index = prompt("Lütfen güncellemek istediğiniz görevin numarasını giriniz:");
        todo = prompt("Lütfen yeni görevi giriniz:");
        todoList[index - 1] = todo;
        console.log("New List: " + todoList);
        break;
      case "4":
        listTodos();
        break;
      default:
        alert("Geçersiz işlem. Lütfen tekrar deneyiniz.");
        console.log("Invalid operation. Please try again.");
        break;
    }
  }
  

  loopControl = prompt("Devam etmek istiyor musunuz? (e/h)") === "e";
}
