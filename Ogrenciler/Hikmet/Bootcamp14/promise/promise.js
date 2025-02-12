function getData(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof data === "string") {
				console.log("Sonuç olumlu. Gelen Değer: ", data);
				resolve(data);
			} else {
				console.log("Sonuç olumsuz. Gelen Değer: ", data);
				reject("Lütfen string bir değer giriniz.");
			}
		}, 2000);
	});
}

getData(3)
	.then((response) => {
		console.log("Gelen Değer: ", response);
	})
	.catch((err) => {
		console.error(err);
	});
