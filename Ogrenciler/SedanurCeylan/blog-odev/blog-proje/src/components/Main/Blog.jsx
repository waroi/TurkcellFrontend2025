import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBlogModal from './AddBlogModal';
import AddBlogButton from './AddBlogButton';

function Blog() {
    console.log("Blog.js YÜKLENDİ!");

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/blogs')
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
        fetch('http://localhost:5000/blogs', {
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

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Blog Yazıları</h1>
            
        
            <AddBlogButton toggleModal={toggleModal} />

            {loading && <div className="alert alert-info">Yükleniyor...</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4 mb-4" key={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

         
            <AddBlogModal showModal={showModal} closeModal={toggleModal} addNewPost={addNewPost} />
        </div>
    );
}

export default Blog;
