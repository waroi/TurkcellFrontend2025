const api = "https://api.github.com/users/";

export const fetchGitHubUser = async (username) => {
  try {
    const userResponse = await fetch(`${api}${username}`);
    if (!userResponse.ok) throw new Error("User not found");
    return await userResponse.json();
  } catch (error) {
    return null;
  }
};

export const fetchGitHubUserRepo = async (username, page = 1, perPage = 10) => {
  try {
    const reposResponse = await fetch(
      `${api}${username}/repos?page=${page}&per_page=${perPage}`
    );

    if (!reposResponse.ok) throw new Error("Repos not found");
    return await reposResponse.json();
  } catch (error) {
    return null;
  }
};
