import { useEffect, useState } from "react";
// import fetchPosts from "../lib.js/fetch";
import PostCard from "./components/PostCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error,setError] = useState("");

  const fetchData = async () => {
    const url = "http://localhost:3000";
    const query = "/posts";
    const response = await fetch(`${url}${query}`);
    if (!response.ok) {
      setError(response.status);
    }
    const data = await response.json();
    setBlogPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            {" "}
            {blogPosts &&
              blogPosts.map((postItem) => (
                <PostCard key={postItem.id} postItem={postItem} />
              ))}
          </Col>
          <Col md={3} className="d-none d-md-block">
            {blogPosts &&
              blogPosts.map((postItem) => (
                <SideBar key={postItem.id} postItem={postItem} />
              ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
