function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("sonuç olumlu");
        resolve("data alındı");
      } else {
        console.log("sonuç olumsuz");
        reject("data alınamadı");
      }
    }, 1000);
  });
}

getData()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
