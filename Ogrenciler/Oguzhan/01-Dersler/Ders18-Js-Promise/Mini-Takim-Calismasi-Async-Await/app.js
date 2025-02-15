async function getAllPost() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok) {
        throw new Error('Bir hata oluştu:', response.status)
    }
    const data = await response.json();
    UI.showPost(data);
}
getAllPost();

