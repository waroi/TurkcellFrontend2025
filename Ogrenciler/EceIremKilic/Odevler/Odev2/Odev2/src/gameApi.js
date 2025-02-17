class GameAPI {
  static getData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => UI.getOnUI(data))
        .catch((err) => reject(err));
    });
  }
  static postData(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json;" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json;',
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err, 'Hata Alındı.'))
    })
  }
  static async delete(url) {
    return await fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((err) => console.log(err))
  }
}
GameAPI.getData('http://localhost:3000/games/');