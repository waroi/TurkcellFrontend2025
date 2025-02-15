export class Request {
  static get(url) {
      return new Promise((resolve, reject) => {
          fetch(url)
              .then(response => response.json())
              .then(data => resolve(data))
              .catch(err => reject(err));
      });
  }
  static post(url, body) {
      return new Promise((resolve, reject) => {
          fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      });
  }
  static put(url, body) {
      return new Promise((resolve, reject) => {
          fetch(url, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(err => reject(err));
      });
  }
  static delete(url) {
      return new Promise((resolve, reject) => {
          fetch(url, {
              method: "DELETE"
          })
          .then(response => {
              if (response.ok) {
                  resolve("Veri Silme İşlemi Başarılı");
              } else {
                  reject("Veri Silme İşlemi Başarısız");
              }
          })
          .catch(err => reject(err));
      });
  }
}
