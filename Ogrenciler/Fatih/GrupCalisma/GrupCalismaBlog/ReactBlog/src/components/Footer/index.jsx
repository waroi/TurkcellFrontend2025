import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'

const Footer = () => {
  return (
    <footer className='bg-dark h-12 d-flex align-items-center footer'>
        <Container fluid>
        <div className='d-flex justify-content-center align-items-center text-white'>
            <div>© 2025 Umut, Fatih, Cenk. Tüm Hakları Saklıdır.</div>
        </div>
        </Container>
    </footer>
  )
}

export default Footer