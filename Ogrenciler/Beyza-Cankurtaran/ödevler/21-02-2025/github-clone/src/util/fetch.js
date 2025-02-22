const URL = "https://api.github.com/";
const token = "token";

export default {
  getUser: async (user) => {
    return await fetch(`${URL}users/${user}`, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
      },
    }).then((response) => response.json());
  },

  getRepositories: async (user) => {
    return await fetch(`${URL}users/${user}/repos?per_page=100`, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
      },
    }).then((response) => response.json());
  },
};
