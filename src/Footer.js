import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best services and experiences.
              Your satisfaction is our priority.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light me-3 text-decoration-none">Facebook</a>
              <a href="https://twitter.com" className="text-light me-3 text-decoration-none">Twitter</a>
              <a href="https://instagram.com" className="text-light text-decoration-none">Instagram</a>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 NetflixLite. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
