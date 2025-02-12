function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("Sonuç Olumlu", data);
        resolve("Data Alındı");
      } else {
        console.log("Sonuç Olumsuz");
        reject("Data Alınamadı");
      }
    }, 2000);
  });
}

getData("Deneme")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
