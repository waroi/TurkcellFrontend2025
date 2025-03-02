import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = styled.div`
  background: #fad1d8;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

const NewsCard = styled.div`
  background-color: #fbe9e7;
`;

const NewItem = styled.div`
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

const NewImage = styled.div`
  height: 250px;
`;

const NewItemText = styled.p`
  color: black;
  text-decoration: none;
  font-size: 1rem;
`;

const NewItemAnchor = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1rem;

  &:hover > h4 {
    text-decoration: underline;
    color: blue;
  }
`;

const NewsDetail = styled.div`
  max-width: 700px;
`;

const App = () => {
  return (
    <Root>
      <NewsCard>
        <NewItem>
          <NewImage>
            <img src="your-image-url.jpg" alt="news-item" style={{ borderRadius: '7px', width: '100%', height: '100%', objectFit: 'cover' }} />
          </NewImage>
          <NewItemText>
            <NewItemAnchor href="#">
              <h4>News Title</h4>
            </NewItemAnchor>
            <p>Short description of the news item...</p>
          </NewItemText>
        </NewItem>
      </NewsCard>
      <NewsDetail>
        <p>Some additional details...</p>
      </NewsDetail>
    </Root>
  );
};

export default App;
