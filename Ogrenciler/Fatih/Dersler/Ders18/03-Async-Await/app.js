class Request {
  async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("An error occurred while fetching data.");
    }
    const data = await response.json();
    return data;
  }
}

const request = new Request();
request
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
