document.getElementById("fetch").addEventListener("click", function () {
	const xhr = new XMLHttpRequest();

	xhr.onload = function () {
		if (this.status === 200) {
			document.getElementById("output").innerHTML = this.responseText;
		}
	};
});
