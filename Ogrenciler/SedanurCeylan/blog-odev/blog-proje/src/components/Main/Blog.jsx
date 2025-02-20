import React, { useState, useEffect } from 'react';
import './blog.css';


function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getApiData = () => {
        setLoading(true);
        setError(null);

        fetch('http://localhost:5001/blogs')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Veri çekme hatası');
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    };
    useEffect(() => {
        getApiData();
    }, []);



    return (
        <div className='main'>


            <h1>Blog Yazıları</h1>

            <div className="cards">

                {posts.map((post) => (
                    <div className="card" key={post.id}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button>Devamını Gör</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Blog;