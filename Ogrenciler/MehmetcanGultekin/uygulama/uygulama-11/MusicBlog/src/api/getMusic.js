const Blog_URL = "http://localhost:3000/musics"

async function getMusic() {
  try {
    const response = await fetch(
      Blog_URL,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Müzik bulunamadi");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`getMusic API çağrısı başarisiz! ${error}`);
  }
}

export default getMusic;

