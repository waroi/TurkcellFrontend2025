const URL = "https://api.github.com/";

const token =
  "11AT2PN4A072jaRlOag1Jl_tCTmefp1LfPHXLGyH7LtTYxlxE4Nrq00cnxmpaX6OeYU4XXLB3Drg2f9z2S";

export default {
  getUser: async (user) => {
    return await fetch(`${URL}users/${user}`, {
      method: "GET",
      headers: {
        Authorization: `token github_pat_${token}`,
      },
    }).then((response) => response.json());
  },

  getRepositories: async (user) => {
    return await fetch(`${URL}users/${user}/repos?per_page=100`, {
      method: "GET",
      headers: {
        Authorization: `token github_pat_${token}`,
      },
    }).then((response) => response.json());
  },
};
