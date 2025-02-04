let input = document.getElementById("text");
let button = document.getElementById("button");


input.addEventListener("keypress",function addList(e) {
    console.log("func çalıştı")
    if (e.key === "Enter"){
        var ul = document.getElementById("toDoList");
        var li = document.createElement("li");
        var check = document.createElement("input");
        const icon = document.createElement("i");
        icon.className = "fas fa-trash-can"; 
        check.type = "checkbox";
        li.appendChild(check);
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(icon);
        console.log(li);
        console.log(ul);
        ul.appendChild(li);
        check.addEventListener('change', function() {
            if (this.checked) {
              console.log("Checkbox is checked..");
              li.style.textDecoration="line-through";
            } else {
              console.log("Checkbox is not checked..");
              li.style.textDecoration="none";

            }
          });
    }
});

