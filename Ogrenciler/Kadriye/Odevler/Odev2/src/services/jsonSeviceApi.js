class JsonServiceApi {
  static async getGames(url = "http://localhost:3000/games/") {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error("Veri alınamadı! Hata kodu: " + response.status);
    const data = await response.json();
    return data;
  }
  static async post(game) {
    const response = await fetch("http://localhost:3000/games/", {
      method: "POST",
      body: JSON.stringify(game),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok)
      throw new Error("Oyun eklenemedi! Hata Kodu: " + response.status);
    const data = await response.json();
    return data;
  }
  static async put(game) {
    const response = await fetch("http://localhost:3000/games/" + game.id, {
      method: "PUT",
      body: JSON.stringify(game),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok)
      throw new Error("Oyun güncellenemedi! Hata Kodu: " + response.status);
    const data = await response.json();
    return data;
  }
  static async delete(id) {
    const response = await fetch("http://localhost:3000/games/" + id, {
      method: "DELETE",
    });
    if (!response.ok)
      throw new Error("Oyun silinemedi! Hata Kodu: " + response.status);
    console.log("Silme işlemi başarılı");
  }
  static async applyFilters(genre, release_start, release_end) {
    let dateUrl;
    if (release_start && release_end != "") {
      dateUrl =
        "http://localhost:3000/games?release_gte=" +
        release_start +
        "&release_lte=" +
        release_end;
    } else if (release_start == "" && release_end != "") {
      dateUrl = "http://localhost:3000/games?release_lte=" + release_end;
    } else if (release_start != "" && release_end == "") {
      dateUrl = "http://localhost:3000/games?release_gte=" + release_start;
    }
    const data_release = await this.getGames(dateUrl);
    const data_category = await this.getGames(
      "http://localhost:3000/games?genre_like=" + genre
    );
    if (data_release && data_category != []) {
      const categoryIds = data_category.map((game) => game.id);
      return [...data_release].filter((data) => categoryIds.includes(data.id));
    } else if (data_release == [] && data_category != []) {
      return data_category;
    } else if (data_release != [] && data_category == []) {
      return data_release;
    }
  }
  static async search(input) {
    const data_name = await this.getGames(
      "http://localhost:3000/games?name_like=" + input
    );
    const data_company = await this.getGames(
      "http://localhost:3000/games?company_like=" + input
    );
    const data_category = await this.getGames(
      "http://localhost:3000/games?genre_like=" + input
    );
    const data = [
      ...new Set([...data_name, ...data_company, ...data_category]),
    ];
    if (data.length != 0) {
      return data;
    }
  }
  static async sort(index) {
    if (index == 1) {
      const data = await this.getGames(
        "http://localhost:3000/games?_sort=name&_order=asc"
      );
      return data;
    } else if (index == 2) {
      const data = await this.getGames(
        "http://localhost:3000/games?_sort=name&_order=desc"
      );
      return data;
    } else if (index == 3) {
      const data = await this.getGames(
        "http://localhost:3000/games?_sort=release&_order=desc"
      );
      return data;
    } else {
      const data = await this.getGames("http://localhost:3000/games/");
      return data;
    }
  }
}

export default JsonServiceApi;
