import React from 'react'

const BlogView = async ({ params }) => {
    const { id } = await params
    return (
        <div className="container">
            <h1>BlogView {id} </h1>
        </div>
    )
}

export default BlogView