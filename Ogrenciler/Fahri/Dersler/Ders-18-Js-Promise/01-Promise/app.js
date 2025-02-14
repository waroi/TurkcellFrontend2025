function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("Sonuç olumlu");
        resolve("Data alındı");
      } else {
        console.log("Sonuç olumsuz");
        reject("Data alınamadı");
      }
    }, 2000);
  });
}

getData("Deneme")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
