import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 0;
`;

const Title = styled(motion.h1)`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Text = styled(motion.p)`
  font-size: 1em;
  color: #555;
  max-width: 800px;
`;

const AboutPage = () => {
  return (
    <Page>
      <Title
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </Title>
      <Text
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        This is an example of a modern React webpage using styled-components and framer-motion for a sleek, dynamic experience.
      </Text>
    </Page>
  );
};

export default AboutPage;
