const posts = [];

class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Verileri alırken hata oluştu.");
    }
    const data = await response.json();
    const slicedData = data.slice(0, 10);

    slicedData.map((slice) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h1");
      title.classList.add("card-title");

      const body = document.createElement("p");
      body.classList.add("card-body");

      slice.title;
    });

    return slicedData;
  }
}

const request = new Request();

request
  .get("https://jsonplaceholder.typicode.com/posts")
  //.then((slicedData) => posts.push(slicedData))
  .then((slicedData) => console.log(slicedData))
  .catch((err) => console.log(err));
