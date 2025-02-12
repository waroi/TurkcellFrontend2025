function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("Sonuç Olumlu");

        resolve("Data alındı");
      } else {
        console.log("Sonuç Olumsuz");
        reject(new Error("Data alınamadı"));
      }
    }, 5000);
  });
}

getData("Merhaba")
  .then((response) => {
    console.log("Gelen Data: ", response);
  })
  .catch((err) => {
    console.error(err);
  });
