export class AuthService {
    static BASE_URL = "http://localhost:5000/users"

    static async getUser(email) {
        const response = await fetch(`${this.BASE_URL}?email=${email}`)
        if (!response.ok) throw new Error("user almaya çalışırken boom");
        const data = await response.json()
        return data[0]
    }

    static async addUser(newUser) {
        console.log(newUser)
        const response = await fetch(`${this.BASE_URL}`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        if (!response.ok) throw new Error("user almaya çalışırken boom");
        const data = await response.json()
        return data
    }
}