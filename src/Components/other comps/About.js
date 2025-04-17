import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion'; // For smooth animations
import {  useNavigate } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
function About() {
  const navigate=useNavigate();
  return (
    <Container fluid className="about-container" style={styles.container}>
      <Row className="justify-content-center">
        <Col md={8}>
          <motion.h1
            className="text-center mb-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.title}
          >
            About 
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Card className="shadow-lg rounded-lg mb-4" style={styles.card}>
              <Card.Body>
                <Row>
                  <Col md={6}
                  >
                    <Image
                      src="https://assets-global.website-files.com/5f6b9a421d5a61e1d0cd9e3d/5f8e797b36244564f260508b_5d5425f14b5d5c276236b3d7_about%2520us-p-2000.jpeg" // Placeholder image for the app
                      rounded
                      className='mb-1 mr-2'
                      fluid
                      style={styles.image}
                    />
                  </Col>
                  <Col md={6}>
                    <Card.Title className="mb-3" style={styles.cardTitle}>
                      Welcome to the Movie Search App!
                    </Card.Title>
                    <Card.Text style={styles.text}>
                      Discover and explore movies at your fingertips. Search for your favorite titles, get detailed information about the cast, plot, ratings, and much more. The Movie Search App provides an easy and seamless experience to enjoy your movie journey.
                    </Card.Text>
                    <Card.Text style={styles.featuresText}>
                      <strong>Key Features:</strong>
                      <ul style={styles.featuresList}>
                        <li>Search for movies by title or genre</li>
                        <li>Explore trending, popular, and upcoming movies</li>
                        <li>View movie details, ratings, reviews, and cast</li>
                        <li>Responsive design for all screen sizes</li>
                      </ul>
                    </Card.Text>
                    <Button
                      variant="primary"
                     onClick={()=>navigate("/moviepage")} 
                      style={styles.button}
                    >
                      <FaFilm className="mr-2" /> Start Searching Movies
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(135deg,rgb(43, 43, 43),rgb(255, 255, 255))',
    minHeight: '100vh',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '2rem',
    color: '#333',
    fontWeight: '600',
  },
  text: {
    fontSize: '1rem',
    color: '#555',
  },
  featuresText: {
    fontSize: '1rem',
    color: '#555',
  },
  featuresList: {
    listStyleType: 'circle',
    paddingLeft: '20px',
  },
  button: {
    backgroundColor: '#ff6f61',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1.1rem',
    borderRadius: '8px',
    marginTop: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default About;
