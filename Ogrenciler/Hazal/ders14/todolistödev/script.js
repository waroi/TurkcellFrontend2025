document.getElementById("addTodoBtn").onclick = function () {
	const todoInput = document.getElementById("todoInput").value;
	const descInput = document.getElementById("descInput").value;
	if (todoInput && descInput) {
		addTodo(todoInput, descInput);
		document.getElementById("todoInput").value = "";
		document.getElementById("descInput").value = "";
	}
};

function addTodo(todoInput, descInput) {
	const li = document.createElement("li");
	li.className =
		"list-group-item d-flex justify-content-between align-items-center";
	let header = document.createElement("h2");
	header.innerText = todoInput;
	let desc = document.createElement("div");
	desc.innerText = descInput;

	const buttonRow = document.createElement("div");
	buttonRow.className = "d-flex gap-2";

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "btn btn-danger btn-sm";
	deleteBtn.innerText = "Sil";
	deleteBtn.onclick = function () {
		alert("Bu işlemi gerçekleştirmek istediğinize emin misiniz?");
		li.remove();
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

	li.appendChild(header);
	li.appendChild(desc);
	li.appendChild(buttonRow);
	buttonRow.appendChild(li.appendChild(editBtn));
	buttonRow.appendChild(li.appendChild(completeBtn));
	buttonRow.appendChild(li.appendChild(deleteBtn));
	document.getElementById("todoList").appendChild(li);
}
