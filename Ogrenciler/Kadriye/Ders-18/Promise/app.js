function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof data === "string") {
        console.log("s");
        resolve("data");
      } else {
        console.log("b");
        resolve("bbbb");
      }
    }, 2000);
  });
}
getData("deneme")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
