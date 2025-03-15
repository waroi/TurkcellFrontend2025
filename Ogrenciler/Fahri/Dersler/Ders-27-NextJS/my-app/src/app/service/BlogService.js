export class BlogService {
    static API_URL = "http://localhost:5000/blogs"

    static async getBlogById(id) {
        const response = await fetch(`${this.API_URL}/${id}`)
        if (!response.ok) throw new Error("Blog bulunamadı bro")
        return await response.json()
    }

    static async updateBlog(blog) {
        const response = await fetch(`${this.API_URL}/${blog.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        })

        if (!response.ok) throw new Error("Blog güncellenirken bir hata oluştu.")
        return await response.json()
    }

    static async addBlog(blog) {
        const response = await fetch(this.API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        })

        if (!response.ok) throw new Error("Blog eklenirken bir hata oluştu.")
        return await response.json()
    }

    static async deleteBlog(id) {
        const response = await fetch(`${this.API_URL}/${id}`, {
            method: "DELETE",
        })
        if (!response.ok) throw new Error("Blog silinirken bir hata oluştu")
        return response.ok
    }
}
