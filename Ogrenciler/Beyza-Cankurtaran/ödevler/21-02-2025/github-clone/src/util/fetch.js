const URL = "https://api.github.com/";
const token = "eee";

export default {
  getUser: async (user) => {
    return await fetch(`${URL}users/${user}`, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
      },
    }).then((response) => response.json());
  },
};
