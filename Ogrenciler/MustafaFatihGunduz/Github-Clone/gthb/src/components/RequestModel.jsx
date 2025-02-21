const API_URL = "https://api.github.com/search/users?q=";

export const getUsers = async (user) => {
  try {
    const response = await fetch(`${API_URL}${user}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getUserRepositories = async (user) => {
  try {
    const response = await fetch(`${API_URL}${user}/repos`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};
