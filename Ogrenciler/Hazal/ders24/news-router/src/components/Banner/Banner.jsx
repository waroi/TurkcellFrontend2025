import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  margin-bottom: 30px;
`;

const CarouselImage = styled.img`
  height: 600px;
  object-fit: cover;
`;

function Banner({ news }) {
  return (
    <StyledCarousel>
      {news && news.slice(0, 3).map((item, index) => (
        <Carousel.Item key={index}>
          <CarouselImage
            className="d-block w-100"
            src={item.urlToImage}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
}

export default Banner;