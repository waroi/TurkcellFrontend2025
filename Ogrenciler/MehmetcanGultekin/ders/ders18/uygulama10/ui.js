class UI {
  static getPost(post) {
    const getPost = document.getElementById("posts");

    const postCol = document.createElement("div");
    postCol.className = "col";

    const postCard = document.createElement("div");
    postCard.className = "card h-100";

    const postCardBody = document.createElement("div");
    postCardBody.className = "card-body ";

    const postTitle = document.createElement("h5");
    postTitle.className = "card-title text-uppercase";
    postTitle.textContent = post.title;


    const postText = document.createElement("p");
    postText.className = "card-text text-capitalize-first-letter";
    postText.textContent = post.body;


    postCardBody.append(postTitle, postText);
    postCard.append(postCardBody);
    postCol.append(postCard);
    getPost.append(postCol);
  }
}
