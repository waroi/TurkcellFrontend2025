class Request {
    static get(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          UI.getUI(data)
        })
        .catch((err) => console.log(err))
    }
    static post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'POST',
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
        .catch((err) => console.error(err))
    }
  }
  
  Request.get('http://localhost:3002/games')