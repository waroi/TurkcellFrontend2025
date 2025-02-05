let input = document.getElementById("text");
let button = document.getElementById("button");

input.addEventListener("keypress",function addList(e) {
  if (e.key === "Enter" && input.value.trim()!==""){
        var ul = document.getElementById("toDoList");
        var li = document.createElement("li");
        var check = document.createElement("input");
        var p = document.createElement("p")
        var icon = document.createElement("i");
        var taskPelement = document.getElementById("taskCounter")

        function taskCounter(){
          var taskCount = document.getElementsByTagName("li").length
          taskPelement.textContent = `Bekleyen görev sayısı: ${taskCount}`
          }
        button.addEventListener("click",function(){
          while( ul.firstChild ){ul.removeChild( ul.firstChild );}
          taskCounter()
        })
        icon.className = "fas fa-trash-can"; 
        p.textContent = input.value
        check.type = "checkbox";
        li.appendChild(check);
        li.appendChild(p);
        li.appendChild(icon);
        ul.appendChild(li);
        li.addEventListener("dblclick", function () {
          li.className = "border border-primary border-2";
          document.addEventListener("click", function removeBorder(event) {
              if (!li.contains(event.target)) {
                  li.style.border = "none";
                  document.removeEventListener("click", removeBorder); 
                  liInput.remove();
                  li.appendChild(check);
                  p.textContent = liInput.value
                  li.appendChild(p);
                  li.appendChild(icon);
              }
          })
          p.remove();
          icon.remove();
          check.remove();
          var liInput = document.createElement("input")
          li.appendChild(liInput)
      });
        check.addEventListener('change', function() {
            if (this.checked) {
              p.style.textDecoration="line-through";
            } else {
              p.style.textDecoration="none";

            }
          });
          icon.addEventListener("click", function(){
            li.remove();
            taskCounter()
          });
          input.value = "";
          taskCounter()
    }
});