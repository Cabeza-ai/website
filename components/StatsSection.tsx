import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section<{ bg?: string; fullHeight?: boolean }>`
  padding: ${({ fullHeight }) => fullHeight ? '0' : '6rem 1rem 5rem 1rem'};
  background: ${({ bg }) => bg || '#0a0a0f'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: ${({ fullHeight }) => fullHeight ? '100vh' : 'auto'};
  justify-content: ${({ fullHeight }) => fullHeight ? 'center' : 'flex-start'};
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: #7877c6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #a8b2d1;
  font-size: 1.1rem;
  font-weight: 500;
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stats = [
  { number: "500+", label: "AI Workflows Built" },
  { number: "50+", label: "Companies Transformed" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
];

const StatsSection = () => (
  <Section bg="#0f0f1a">
    <StatsGrid
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <StatNumber>{stat.number}</StatNumber>
          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      ))}
    </StatsGrid>
  </Section>
);

export default StatsSection; 