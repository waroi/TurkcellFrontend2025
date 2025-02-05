document.getElementById("addTodoBtn").onclick = function () {
	const todoInput = document.getElementById("todoInput").value;
	const descInput = document.getElementById("descInput").value;
	if (todoInput && descInput) {
		addTodo(todoInput, descInput);
		document.getElementById("todoInput").value = "";
		document.getElementById("descInput").value = "";
	}
};

function updateNumbers() {
	const listItems = document.querySelectorAll(".list-group-item");
	listItems.forEach((item, index) => {
		const numberSpan = item.querySelector(".item-number");
		if (numberSpan) {
			numberSpan.innerText = `${index + 1}.`;
		}
	});
}

function addTodo(todoInput, descInput) {

	const ul = document.createElement("ul");
	ul.className = "list-group";
	ul.id = "todoList";
	const li = document.createElement("li");
	li.className =
		"list-group-item d-flex justify-content-between mt-3 border border-warning";
	let header = document.createElement("h2");
	header.className = "flex-shrink-1";
	header.innerText = todoInput;
	let desc = document.createElement("div");
	desc.className =
		"d-flex flex-col justify-content-center align-items-center text-center w-50";
	desc.innerText = descInput;
	const numberSpan = document.createElement("span");
	numberSpan.className = "item-number me-2";
	const buttonRow = document.createElement("div");
	buttonRow.className = "d-flex gap-2";

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "btn btn-danger btn-sm";
	deleteBtn.innerText = "Sil";
	deleteBtn.onclick = function () {
		alert("Bu işlemi gerçekleştirmek istediğinize emin misiniz?");
		li.remove();
		updateNumbers();
	};

	const completeBtn = document.createElement("button");
	completeBtn.className = "btn btn-success btn-sm";
	completeBtn.innerText = "Tamamla";
	completeBtn.onclick = function () {
		li.classList.toggle("list-group-item-success");
		header.classList.toggle("text-decoration-line-through");
		desc.classList.toggle("text-decoration-line-through");
	};

	const editBtn = document.createElement("button");
	editBtn.className = "btn btn-secondary btn-sm";
	editBtn.innerText = "Düzenle";
	editBtn.onclick = function () {
		if (editBtn.innerText === "Düzenle") {
			const titleInput = document.createElement("input");
			titleInput.type = "text";
			titleInput.className = "form-control mb-2";
			titleInput.value = header.innerText;
			const descInput = document.createElement("input");
			descInput.type = "text";
			descInput.className = "form-control mb-2";
			descInput.value = desc.innerText;
			header.replaceWith(titleInput);
			desc.replaceWith(descInput);
			editBtn.innerText = "Kaydet";
			editBtn.className = "btn btn-primary btn-sm";
		} else {
			const titleInput = li.querySelector("input:first-child");
			const descInput = li.querySelector("input:last-of-type");
			const newHeader = document.createElement("h2");
			newHeader.innerText = titleInput.value;
			const newDesc = document.createElement("div");
			newDesc.innerText = descInput.value;
			titleInput.replaceWith(newHeader);
			descInput.replaceWith(newDesc);
			header = newHeader;
			desc = newDesc;
			editBtn.innerText = "Düzenle";
			editBtn.className = "btn btn-secondary btn-sm";
		}
	};

	li.appendChild(numberSpan);
	li.appendChild(header);
	li.appendChild(desc);
	li.appendChild(buttonRow);
	buttonRow.appendChild(li.appendChild(editBtn));
	buttonRow.appendChild(li.appendChild(completeBtn));
	buttonRow.appendChild(li.appendChild(deleteBtn));
	ul.appendChild(li);
	const formContainer = document.getElementById("formContainer");
	formContainer.append(ul);
	//document.getElementById("todoList").appendChild(li);
	updateNumbers();
}
