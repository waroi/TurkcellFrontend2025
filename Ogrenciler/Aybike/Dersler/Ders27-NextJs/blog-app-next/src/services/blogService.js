
export class BlogService {
  static async getBlogById (id) {
    const response = await fetch(`http://localhost:3002/blogs/${id}`)
    return await response.json()
  }
  static async getBlogs () {
    const response = await fetch('http://localhost:3002/blogs')
    return await response.json()
  }
  static async put (blog) {
    const response = await fetch('http://localhost:3002/blogs' + '/' + blog.id, {
      method: 'PUT',
      body: JSON.stringify(blog),
      headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok)
      throw new Error('Blog güncellenemedi! Hata Kodu: ' + response.status)
    const data = await response.json()
    return data
  }
  static async delete (id) {
    const response = await fetch('http://localhost:3002/blogs' + '/' + id, { method: 'DELETE' })
    if (!response.ok)
      throw new Error('Blog silinemedi! Hata Kodu: ' + response.status)
    console.log('Silme işlemi başarılı')
  }
  static async post (blog) {
    const response = await fetch('http://localhost:3002/blogs' + '/', {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: { 'Content-Type': 'application/json' }
    })
    if (!response.ok)
      throw new Error('Blog eklenemedi! Hata Kodu: ' + response.status)
    const data = await response.json()
    return data
  }
}
