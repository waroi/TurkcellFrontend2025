const getRepos = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();
  console.log("API'den dönen veri:", data);
  return data;
};
const getUser = async (username) => {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  );
  const data = await response.json();
  console.log("API'den dönen veri:", data); 
  return data;
};

export { getRepos, getUser };