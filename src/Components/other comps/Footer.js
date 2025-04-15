import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0 mb-0">
            <h5>About Us</h5>
            <p>
              We are committed to providing the best services and experiences.
              Your satisfaction is our priority.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/moviepage" className="text-light text-decoration-none">Movies</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <div>
              <Link to="https://facebook.com" className="text-light me-3 text-decoration-none">Facebook</Link>
              <Link to="https://twitter.com" className="text-light me-3 text-decoration-none">Twitter</Link>
              <Link to="https://instagram.com" className="text-light text-decoration-none">Instagram</Link>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2025 JustMovies. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
