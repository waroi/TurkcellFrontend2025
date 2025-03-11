export class BlogService {
    static BASE_URL = "http://localhost:50324/" // random portta açtım siz değiştirin lütfen

    static async getAllBlogs() {
        const response = await fetch(this.BASE_URL + 'blogs')
        if (!response.ok) throw new Error('BOOM sunucu patlamış')
        const data = await response.json()
        return data
    }

    static async removeBlog(id) {
        const response = await fetch(`${this.BASE_URL}blogs${id}`, {
            method: "DELETE"
        })
        if (!response.ok) throw new Error('Silerken bir hata oluştu')
        return { message: "Blog başarıyla silindi" }
    }

    static async updateBlog(id, updatedData) {
        const response = await fetch(`${this.BASE_URL}blogs${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedData),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })

        if (!response.ok) throw new Error("Blog'u güncellerken bir hata oluştu")
        const data = awaitresponse.json()
        return data
    }

    static async addBlog(newBlog) {
        const response = await fetch(`${this.BASE_URL}blogs`, {
            method: "POST",
            body: JSON.stringify(newBlog),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        if (!response.ok) throw new Error("Blog eklerken bir hata oluştu")

        const data = await response.json()
        return { data: data, status: true }

    }
}