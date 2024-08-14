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

const ContactPage = () => {
  return (
    <Page>
      <Title
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </Title>
      <Text
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feel free to reach out through our social media channels or via email for any inquiries.
      </Text>
    </Page>
  );
};

export default ContactPage;
