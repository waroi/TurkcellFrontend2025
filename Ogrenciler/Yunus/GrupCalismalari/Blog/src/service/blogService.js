const baseUrl = 'http://localhost:3000/';

export const getAllBlogs = async () => {
    const response = await fetch(`${baseUrl}blog_posts`);
    return await response.json();
};

export const addBlogPost = async (blog) => {
    const response = await fetch(`${baseUrl}blog_posts`, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
    return await response.json();
};

export const updateBlogPost = async (id, blogData) => {
    const response = await fetch(`${baseUrl}blog_posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(blogData),
        headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
    return await response.json();
};

export const deleteBlogPost = async (id) => {
    return await fetch(`${baseUrl}blog_posts/${id}`, {
        method: 'DELETE',
    });
};