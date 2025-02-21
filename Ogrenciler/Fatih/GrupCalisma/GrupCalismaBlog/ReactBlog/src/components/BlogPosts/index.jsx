import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostCard from '../PostCard';
import { fetchPosts } from '../../services/apiRequests';
import './style.css';

const BlogPosts = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.icerik.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='blog-section py-5'>
      <Container>
        <h2 className='text-center mb-4 blog-title'>Güncel Blog Yazıları</h2>

        {loading && <p className='text-center'>Yükleniyor...</p>}
        {error && <p className='text-center text-danger'>{error}</p>}

        <Row className='justify-content-center'>
          {!loading && !error && filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Col key={post.id} xs={12} sm={6} md={6} lg={4} xl={3} className='d-flex justify-content-center mb-5'>
                <PostCard data={post} />
              </Col>
            ))
          ) : (
            !loading && <p className='text-center'>Sonuç bulunamadı</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPosts;
