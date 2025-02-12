const row = document.getElementById("row");
class UI {
  static showPost(posts) {
    posts.map((post) => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-md-6 col-12";
      const cardDiv = document.createElement("div");
      cardDiv.className = "card bg-warning mb-4";
      const cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src="https://picsum.photos/300/100";
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      const title = document.createElement("h5");
      title.className = "card-title text-white";
      title.textContent = post.title;
      const subtitle = document.createElement("h5");
      subtitle.className = "card-subtitle text-white";
      subtitle.textContent = post.id;
      const cardText = document.createElement("p");
      cardText.className = "card-text text-dark";
      cardText.textContent = post.body;
      col.appendChild(cardDiv);
      cardDiv.append(cardImg, cardBody);
      cardBody.append(title, subtitle, cardText);
      row.appendChild(col);
    });
  }
}
