const API_URL = "https://api.github.com/search/users?q=";
const token = "";

export const getUsers = async (user) => {
  try {
    const response = await fetch(`${API_URL}${user}`);
    const data = await response.json();
    if (
      response.status === 404 ||
      response.status === 403 ||
      response.status === 401
    ) {
      console.log("No user found");
      return null;
    }
    if (response.status === 422) {
      console.log("Validation Failed");
      return null;
    }
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getUserRepositories = async (userLogin) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userLogin}/repos`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getUserInfos = async (userLogin) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userLogin}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getContrubitons = async (userLogin, repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${userLogin}/${repoName}/contributors`
    );
    const data = await response.json();
    const contributor = data.contributor;
    console.log("Contributor", contributor);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getLangs = async (userLogin, repoName) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${userLogin}/${repoName}/languages`
    );
    const data = await response.json();
    const languages = Object.keys(data);
    return languages;
  } catch (error) {
    console.log(error);
    return [];
  }
};
