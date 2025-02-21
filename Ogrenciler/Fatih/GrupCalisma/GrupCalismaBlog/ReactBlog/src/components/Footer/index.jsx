import { Container } from 'react-bootstrap';
import './style.css';

const Footer = () => {
  return (
    <footer className='footer-custom py-3'>
      <Container>
        <div className='text-center text-white'>
          © 2025 Umut, Fatih, Cenk. Tüm Hakları Saklıdır.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;