// const getPosts = async () =>
//   await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// getPosts();

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Hata');
  }
  const data = await response.json();
  return data;
}
let posts = [];
getPosts()
  .then((data) => {
    posts = data;
    // console.log(posts);
  })
  .catch((err) => console.error(err));

console.log(posts);
