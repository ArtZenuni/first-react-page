import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaRocket, FaCogs, FaUsers } from 'react-icons/fa';

const CardsSection = () => {
  const cardsData = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Experience lightning-fast loading times and seamless user experience.",
    },
    {
      icon: <FaCogs />,
      title: "Customizable",
      description: "Tailor the design to match your brand’s unique style and needs.",
    },
    {
      icon: <FaUsers />,
      title: "User Friendly",
      description: "An intuitive interface that ensures a great user experience for all.",
    },
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {cardsData.map((card, index) => (
          <Col key={index} md={4} className="d-flex align-items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-100"
            >
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title style={{ fontSize: '2em', color: '#007BFF' }}>
                    {card.icon}
                  </Card.Title>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsSection;
