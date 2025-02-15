async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Hata');
  }
  const data = await response.json();
  return data;
}

//GET POSTU BÖYLE THEN İLE YAZMAK YERİNE BİR FONKSİYON İÇİNDE ASYNC AWAIT KEYWORDU İLE ASENKRON BİR ŞEKİLDE ÇALIŞTIRABİLİRİZ. BU ŞEKİLDE FONKSİYON DIŞINDA İSTEDİĞİMİZ YERDE İSTEDİĞİMİZ İŞLEMİ YAPABİLİRİZ.

// getPosts()
//   .then((data) => {
//     posts = data;
//     // console.log(posts);
//   })
//   .catch((err) => console.error(err));

// console.log(posts);

async function fetchAndLogPosts() {
  const posts = await getPosts();

  const container = document.createElement('div');
  container.classList.add(
    'container',
    'mt-4',
    'd-flex',
    'flex-wrap',
    'justify-content-center'
  );

  posts.forEach((post) => {
    const card = document.createElement('div');
    card.classList.add('card', 'm-2');
    card.style.width = '18rem';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;

    const bodyText = document.createElement('p');
    bodyText.classList.add('card-text');
    bodyText.textContent = post.body;

    cardBody.appendChild(title);
    cardBody.appendChild(bodyText);
    card.appendChild(cardBody);
    container.appendChild(card);
  });

  document.body.appendChild(container);
}

fetchAndLogPosts();
