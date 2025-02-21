import { useEffect, useState } from 'react';
import PostCard from './components/PostCard';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [user, setUser] = useState({});
  const [postLoading, setPostLoading] = useState(null);
  const [userLoading, setUserLoading] = useState(null);
  const [error, setError] = useState('');

  const fetchPostData = async () => {
    setPostLoading(true);
    try {
      const url = 'http://localhost:3000';
      const query = '/posts';
      const response = await fetch(`${url}${query}`);
      if (!response.ok) {
        setError('Hata Kodu:', response.status);
      }
      const data = await response.json();
      setBlogPosts(data);
    } catch (error) {
      setError(`fetchPostData API çağrısı başarısız: ${error}`);
    } finally {
      setPostLoading(false);
    }
  };
  const fetchUserData = async () => {
    setUserLoading(true);
    try {
      const url = 'http://localhost:3000';
      const query = '/user';
      const response = await fetch(`${url}${query}`);
      if (!response.ok) {
        setError('Hata Kodu:', response.status);
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(`fetchUserData API çağrısı başarısız: ${error}`);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    fetchPostData();
    fetchUserData();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          {postLoading ? (
            <Col sm={12} md={9}>
              <p>Loading posts...</p>
            </Col>
          ) : (
            <Col sm={12} md={9}>
              {blogPosts &&
                blogPosts.map((postItem) => (
                  <PostCard key={postItem.id} postItem={postItem} user={user} />
                ))}
            </Col>
          )}
          {userLoading ? (
            <Col md={3} className='d-none d-md-block'>
              <p>Loading user...</p>
            </Col>
          ) : (
            <Col md={3} className='d-none d-md-block'>
              <SideBar user={user} />
            </Col>
          )}
        </Row>
        {error && <p className='d-block fw-bold text-danger'>{error}</p>}
      </Container>
      <Footer />
    </>
  );
}

export default App;
