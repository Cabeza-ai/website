import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGraduationCap, FaHandshake, FaCode } from 'react-icons/fa';

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

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(135deg, #fff 0%, #7877c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #a8b2d1;
  text-align: center;
  max-width: 600px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%);
  border-radius: 2rem;
  padding: 3rem 2rem;
  border: 1px solid rgba(120, 119, 198, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #7877c6, #ff77c6);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(120, 119, 198, 0.4);
    box-shadow: 0 20px 60px rgba(120, 119, 198, 0.2);
    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #fff;
  box-shadow: 0 10px 30px rgba(120, 119, 198, 0.3);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
`;

const ServiceDesc = styled.p`
  color: #a8b2d1;
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '✓';
    color: #7877c6;
    font-weight: bold;
  }
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

const services = [
  {
    icon: <FaGraduationCap />,
    title: 'AI Education & Training',
    desc: 'Comprehensive workshops and training programs to help your team develop AI-first thinking',
    features: [
      'Custom training programs',
      'Hands-on workshops',
      'Ongoing support & resources',
      'Team certification'
    ]
  },
  {
    icon: <FaHandshake />,
    title: 'Strategic Consultation',
    desc: 'Expert guidance to identify opportunities and create your AI transformation roadmap',
    features: [
      'Business process analysis',
      'AI strategy development',
      'ROI optimization',
      'Implementation planning'
    ]
  },
  {
    icon: <FaCode />,
    title: 'Custom AI Automation',
    desc: 'Bespoke AI workflow development and integration for your specific business needs',
    features: [
      'Custom workflow design',
      'API integration',
      'Testing & deployment',
      'Maintenance & updates'
    ]
  }
];

const ServicesSection = () => (
  <Section>
    <SectionTitle>Our Services</SectionTitle>
    <SectionSubtitle>
      Comprehensive AI solutions designed to transform how you think and work
    </SectionSubtitle>
    <ServicesGrid
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          variants={fadeInUp}
          whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(120, 119, 198, 0.2)' }}
        >
          <ServiceIcon>{service.icon}</ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDesc>{service.desc}</ServiceDesc>
          <ServiceFeatures>
            {service.features.map((feature, i) => (
              <ServiceFeature key={i}>{feature}</ServiceFeature>
            ))}
          </ServiceFeatures>
        </ServiceCard>
      ))}
    </ServicesGrid>
  </Section>
);

export default ServicesSection; 