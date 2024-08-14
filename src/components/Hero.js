import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Container
      fluid
      className="hero-container d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        color: 'white',
        textAlign: 'center',
        padding: '0 30px',
      }}
    >
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={7}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{ fontSize: '3em', marginBottom: '0.5em', lineHeight: '1.2' }}
          >
            Welcome to My Modern Webpage
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: '1.2em', marginBottom: '1.5em', lineHeight: '1.5' }}
          >
            This was all made using React.js, It is my first ever Landing Page made with React!
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
