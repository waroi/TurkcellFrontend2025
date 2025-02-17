export default class Request {
    static getJSON(url) {     // get promise methodu
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => {
                    alert("Verileri getirirken bir hata oluştu.");
                    return reject(error);
                });
        });
    }

    static putJSON(url, data) { // put methodu
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json;" },
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }


    static postJSON(url, data) {  // post methodu
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

    static deleteJSON(url) { // delete methodu
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
            })
                .then((response) => response.json())
                .then((data) => resolve("Veri Silme İşlemi Başarılı"))
                .catch((err) => reject("Hata: Silme İşlemi Başarısız"));
        });
    }


}
