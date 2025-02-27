import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="banner text-center" style={{ backgroundImage: 'url(../assets/arkaplan.jpg)', padding: '100px 0', color: 'white' }}>
            <Container>
                <h2>WELCOME TO HOLOWorld!</h2>
                <p>Buy a holographic universe and step into different adventures.</p>
                <Button variant="secondary" as={Link} to="/products">BUY NOW</Button>
            </Container>
        </div>
    );
};

export default Banner;