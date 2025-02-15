class BlogRequest {
	async get(url) {
		const response = await fetch(url);
		if (!response.ok) throw new Error("An error occurred");
		const data = await response.json();
		return data;
	}
}

const blog = new BlogRequest();

blog
	.get("https://jsonplaceholder.typicode.com/posts")
	.then((data) => {
		data.forEach((post) => {
			blogs(post);
		});
	})
	.catch((err) => console.log(err));

function blogs(data) {
	const container = document.getElementById("container");

	const blogCard = document.createElement("div");
	blogCard.className = "card h-100";

	const filmImg = document.createElement("img");
	filmImg.className = "card-img-top img-fluid";
	filmImg.src = "https://picsum.photos/200/300";
	filmImg.alt = data.id;
	filmImg.style.height = "200px";
	filmImg.style.objectFit = "cover";

	const cardBody = document.createElement("div");
	cardBody.className = "card-body";

	const blogAdi = document.createElement("h5");
	blogAdi.className = "card-title";
	blogAdi.innerText = data.title;

	const blogBody = document.createElement("p");
	blogBody.className = "card-text";
	blogBody.innerText = `Açıklama: ${data.body}`;

	cardBody.appendChild(blogAdi);
	cardBody.appendChild(blogBody);
	blogCard.appendChild(filmImg);
	blogCard.appendChild(cardBody);
	container.appendChild(blogCard);
}
