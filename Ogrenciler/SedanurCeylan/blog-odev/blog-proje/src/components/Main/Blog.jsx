import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBlogModal from './AddBlogModal';
import AddBlogButton from './AddBlogButton';
import DeleteBlogButton from './DeleteBlogButton';
import UpdateBlogButton from './UpdateBlogButton';
import './blog.css';

function Blog() {
    console.log("Blog.js YÜKLENDİ!");

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5001/blogs')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const addNewPost = (newPost) => {
        fetch('http://localhost:5001/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(response => response.json())
            .then(data => {
                setPosts([...posts, data]);
            })
            .catch(error => console.error('Blog eklenirken hata oluştu:', error));
    };



    const DeletePost = (id) => {
        fetch(`http://localhost:5001/blogs/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
            })
            .catch(error => console.error('Blog silinirken hata oluştu:', error));
    };



    function truncateText(text, maxLength) {
        if (!text) return "";
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    }



    return (
        <div className="container my-5 py-5">

            <AddBlogButton toggleModal={toggleModal} />

            {loading && <div className="alert alert-info">Yükleniyor...</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <div class="row row-cols-1 row-cols-md-3 g-4">
                {posts.map((post) => (
                    <div className="col" key={post.id}>
                        <div className="card p-3 h-100">
                            <div class="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{truncateText(post.body, 100)}</p>
                            </div>
                            <button className="btn btn-link" >Devamını Gör...</button>
                            <DeleteBlogButton DeletePost={DeletePost} id={post.id} />
                            <UpdateBlogButton />
                        </div>
                    </div>
                ))}
            </div>



            <AddBlogModal showModal={showModal} closeModal={toggleModal} addNewPost={addNewPost} />
        </div>
    );
}

export default Blog;
