class RequestModel {
    static async get(url) {
        try {
            const response = await fetch(url);
            const bodyData = await response.json();
            return bodyData;
        } catch (error) {
            return console.error(error);
        }
    }

    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const bodyData = await response.json();
            return bodyData;
        } catch (error) {
            return console.error(error);
        }
    }

    static async update(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const bodyData = await response.json();
            return bodyData;
        } catch (error) {
            return console.error(error);
            
        }
    }

    static async delete(url) {
        try {
            const response = await fetch(url, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                console.log('Silme işlemi başarılı');
            } else {
                console.error('Silme işlemi başarısız');
            }
        } catch (error) {
            return console.error(error);
        }
    }
}

export default RequestModel;