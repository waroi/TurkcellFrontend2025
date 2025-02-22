const getRepos = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();
  console.log("API'den dönen veri:", data); // Kontrol için
  return data;
};

const addRepo = async (repo) => {
  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(repo),
  });
  return response.json();
};

const editRepo = async (repo) => {
  const response = await fetch(`/${repo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(repo),
  });
  return response.json();
};

const deleteRepo = async (id) => {
  const response = await fetch(`/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

export { getRepos, addRepo, editRepo, deleteRepo };
