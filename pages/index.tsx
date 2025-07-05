import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FaRegLightbulb, FaBrain, FaLinkedin, FaEnvelope, FaRobot, FaMicrochip, FaNetworkWired } from 'react-icons/fa';

// Global font styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 400;
    background: #23283b;
    color: #fff;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Inter', Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
`;

// Animated floating gradient background for hero
const float = keyframes`
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-18px) scale(1.03); }
  100% { transform: translateY(0px) scale(1); }
`;
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #23283b 0%, #2d334d 50%, #facc15 100%);
  background-size: 200% 200%;
  animation: ${gradientMove} 8s ease-in-out infinite, ${float} 7s ease-in-out infinite;
  opacity: 0.18;
`;
const Wrapper = styled.div`
  background: #23283b;
  min-height: 100vh;
  color: #fff;
  position: relative;
`;
const Section = styled.section<{ bg?: string }>`
  padding: 6rem 1rem 5rem 1rem;
  background: ${({ bg }) => bg || '#23283b'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroLogo = styled.img`
  width: 12rem;
  height: 12rem;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(250,204,21,0.10);
  @media (max-width: 600px) {
    width: 7rem;
    height: 7rem;
  }
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 16px rgba(36,36,36,0.12);
`;
const GoldDot = styled.span`
  color: #facc15;
`;
const HeroUnderline = styled(motion.div)`
  height: 0.3rem;
  width: 12rem;
  background: linear-gradient(to right, #facc15, #ca8a04);
  margin-top: 1.2rem;
  border-radius: 1rem;
  transform-origin: left;
`;
const HeroTagline = styled.p`
  font-size: 1.5rem;
  color: #e5e7eb;
  margin-top: 2.5rem;
  text-align: center;
  max-width: 36rem;
  font-weight: 500;
`;
const HeroCTA = styled(motion.a)`
  margin-top: 2.5rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(90deg, #facc15 60%, #fde68a 100%);
  color: #23283b;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 24px 0 rgba(250,204,21,0.18);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  cursor: pointer;
  display: inline-block;
  &:hover {
    background: linear-gradient(90deg, #fde68a 60%, #facc15 100%);
    color: #1a1d2b;
    transform: translateY(-2px) scale(1.04);
  }
`;
const SectionDivider = styled.div`
  width: 100%;
  height: 60px;
  background: url('data:image/svg+xml;utf8,<svg width="100%" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H1440V60C960 20 480 20 0 60V0Z" fill="%232d334d"/></svg>');
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -2rem;
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
`;
const SectionText = styled.p`
  max-width: 44rem;
  text-align: center;
  color: #d1d5db;
  font-size: 1.2rem;
  font-weight: 400;
`;
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  width: 100%;
  max-width: 68rem;
  margin-top: 2rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ServiceCard = styled(motion.div)`
  background: #23283b;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 32px 0 rgba(250,204,21,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  transition: border 0.2s, box-shadow 0.2s;
  &:hover {
    border: 2px solid #facc15;
    box-shadow: 0 12px 40px 0 rgba(250,204,21,0.18);
    transform: translateY(-4px) scale(1.03);
  }
`;
const ServiceIcon = styled.span`
  color: #facc15;
  font-size: 3rem;
  margin-bottom: 1.2rem;
`;
const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
`;
const ServiceDesc = styled.p`
  color: #d1d5db;
  text-align: center;
  font-size: 1.08rem;
`;
const ProcessGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 54rem;
  justify-content: center;
  margin-top: 2rem;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;
const ProcessCard = styled(motion.div)`
  background: #1a1d2b;
  border-radius: 1.5rem;
  padding: 2.5rem 2rem;
  flex: 1;
  min-width: 220px;
  text-align: center;
  box-shadow: 0 4px 24px 0 rgba(250,204,21,0.08);
  border: 2px solid transparent;
  transition: border 0.2s, box-shadow 0.2s;
  &:hover {
    border: 2px solid #facc15;
    box-shadow: 0 12px 40px 0 rgba(250,204,21,0.18);
    transform: translateY(-4px) scale(1.03);
  }
`;
const ProcessStep = styled.div`
  color: #facc15;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;
const ProcessTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;
const ProcessDesc = styled.div`
  color: #d1d5db;
  font-size: 1.08rem;
`;
const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(90deg, #facc15 60%, #fde68a 100%);
  color: #23283b;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 16px 0 rgba(250,204,21,0.12);
  margin-top: 2.5rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #fde68a 60%, #facc15 100%);
    color: #1a1d2b;
    transform: translateY(-2px) scale(1.04);
  }
`;
const Footer = styled.footer`
  padding: 2rem 0 1.5rem 0;
  text-align: center;
  color: #9ca3af;
  background: #23283b;
  font-size: 1.08rem;
`;

// Add new styled-components for CTA footer
const CTAFooter = styled(motion.footer)`
  background: linear-gradient(90deg, #facc15 0%, #fde68a 100%);
  color: #23283b;
  padding: 3.5rem 1rem 2.5rem 1rem;
  text-align: center;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 -8px 32px 0 rgba(250,204,21,0.10);
  margin-top: 4rem;
`;
const CTAHeadline = styled(motion.h2)`
  font-family: 'Montserrat', 'Inter', Arial, sans-serif;
  font-size: 2.3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;
const CTASubtext = styled(motion.p)`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;
const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #23283b;
  color: #facc15;
  font-family: 'Montserrat', 'Inter', Arial, sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  border-radius: 2rem;
  box-shadow: 0 4px 24px 0 rgba(36,36,36,0.12);
  margin-bottom: 1.5rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  cursor: pointer;
  &:hover {
    background: #facc15;
    color: #23283b;
    transform: translateY(-2px) scale(1.04);
  }
`;
const TypeformEmbed = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  margin: 2.5rem auto 0 auto;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 32px 0 rgba(36,36,36,0.18);
  background: #fff;
`;

// Animation variants for hero section
const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const logoVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 10, duration: 0.8 } },
};
const headlineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const taglineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
};
const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, delay: 0.5 } },
};
const ctaVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.7 } },
};

// Looping animation for About icon
const aboutIconLoop = keyframes`
  0% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 0 #facc15); }
  20% { transform: translateY(-8px) scale(1.08); filter: drop-shadow(0 0 8px #facc15); }
  40% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 0 #facc15); }
  60% { transform: translateY(-6px) scale(1.05); filter: drop-shadow(0 0 6px #facc15); }
  100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 0 #facc15); }
`;

const AboutSectionFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: stretch;
    gap: 3.5rem;
  }
`;
const AboutIconLargeWrap = styled(motion.div)`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  max-width: 320px;
  @media (max-width: 899px) {
    margin-bottom: 1.5rem;
  }
`;
const AboutIconLarge = styled(motion.div)`
  color: #facc15;
  font-size: 5.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px 0 rgba(250,204,21,0.10);
  background: rgba(35,40,59,0.85);
  padding: 1.2rem 1.5rem;
  animation: ${aboutIconLoop} 2.8s infinite cubic-bezier(0.4,0.6,0.6,1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AboutCard = styled(motion.div)`
  background: rgba(35, 40, 59, 0.98);
  border-radius: 2rem;
  box-shadow: 0 8px 40px 0 rgba(36,36,36,0.18);
  padding: 3.5rem 2rem 2.5rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 2 1 0;
`;
const AboutAccent = styled(motion.div)`
  width: 60px;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, #facc15 0%, #fde68a 100%);
  margin-bottom: 1.5rem;
`;
const AboutIcon = styled(motion.div)`
  color: #facc15;
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  animation: ${aboutIconLoop} 2.8s infinite cubic-bezier(0.4,0.6,0.6,1);
`;
const AboutHeading = styled(motion.h2)`
  font-family: 'Montserrat', 'Inter', Arial, sans-serif;
  font-size: 2.1rem;
  font-weight: 900;
  margin-bottom: 0.7rem;
  text-align: center;
`;
const AboutSubheading = styled(motion.p)`
  font-size: 1.18rem;
  font-weight: 500;
  color: #facc15;
  margin-bottom: 1.2rem;
  text-align: center;
`;
const AboutText = styled(motion.p)`
  font-size: 1.13rem;
  color: #d1d5db;
  text-align: center;
  line-height: 1.7;
  max-width: 600px;
`;

const ContactLinksRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;
const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.13rem;
  font-weight: 500;
  color: #23283b;
  background: #fde68a;
  border-radius: 2rem;
  padding: 0.7rem 1.3rem;
  box-shadow: 0 2px 12px 0 rgba(250,204,21,0.10);
  text-decoration: none;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
  &:hover {
    background: #facc15;
    color: #1a1d2b;
    box-shadow: 0 4px 24px 0 rgba(250,204,21,0.18);
    transform: translateY(-2px) scale(1.04);
  }
`;
const ContactIcon = styled.span`
  font-size: 1.35em;
  display: flex;
  align-items: center;
`;

// Floating icon animation keyframes
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0); }
`;
const floatX = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(18px); }
  100% { transform: translateX(0); }
`;
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HeroIcon = styled(motion.div)<{ pos: string }>`
  position: absolute;
  ${({ pos }) => pos};
  z-index: 0;
  opacity: 0.18;
  filter: blur(0.5px);
  font-size: 3.5rem;
  color: #facc15;
  pointer-events: none;
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export default function Home() {
  useEffect(() => {
    let hasScrolled = false;
    const onScroll = () => {
      if (window.scrollY > 0) {
        hasScrolled = true;
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    const timer = setTimeout(() => {
      if (!hasScrolled) {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Head>
          <title>Cabeza.ai - Elevating Intelligence</title>
          <meta name="description" content="Cabeza.ai - Elevating Intelligence — Naturally and Artificially." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Hero Section with floating icons */}
        <Section as="section" style={{ minHeight: '90vh', justifyContent: 'center', position: 'relative' }}>
          <HeroBg />
          {/* Floating Animated Icons */}
          <HeroIcon
            pos="top: 8%; left: 7%;"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaBrain />
          </HeroIcon>
          <HeroIcon
            pos="top: 18%; right: 10%;"
            animate={{ x: [0, 18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaRobot />
          </HeroIcon>
          <HeroIcon
            pos="bottom: 12%; left: 12%;"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaMicrochip />
          </HeroIcon>
          <HeroIcon
            pos="bottom: 10%; right: 8%;"
            animate={{ x: [0, -18, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaNetworkWired />
          </HeroIcon>
          <HeroIcon
            pos="top: 50%; left: 2%;"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <FaRegLightbulb />
          </HeroIcon>
          {/* Main Hero Content */}
          <HeroContent
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={logoVariants}>
              <HeroLogo src="/logo.png" alt="Cabeza.ai Logo" />
            </motion.div>
            <motion.div variants={headlineVariants}>
              <HeroTitle>
                CABEZA<GoldDot>.AI</GoldDot>
              </HeroTitle>
            </motion.div>
            <HeroUnderline
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.div variants={taglineVariants}>
              <HeroTagline>
                Elevating Intelligence — <GoldDot>Naturally and Artificially.</GoldDot>
              </HeroTagline>
            </motion.div>
            <motion.div variants={ctaVariants}>
              <HeroCTA
                href="#contact"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </HeroCTA>
            </motion.div>
          </HeroContent>
        </Section>
        <SectionDivider />
        {/* Redesigned About Section with looping icon instead of image */}
        <Section as="section">
          <AboutSectionFlex>
            <AboutIconLargeWrap
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AboutIconLarge>
                <FaBrain />
              </AboutIconLarge>
            </AboutIconLargeWrap>
            <AboutCard
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AboutAccent
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              />
              <AboutIcon>
                <FaRegLightbulb />
              </AboutIcon>
              <AboutHeading
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                About Cabeza.ai
              </AboutHeading>
              <AboutSubheading
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                "Building AI-first mindsets for a smarter tomorrow."
              </AboutSubheading>
              <AboutText
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                At Cabeza.ai, we're building more than automations — we're building AI-first mindsets.<br /><br />
                Our agency works with ambitious startups, founders, and growing teams to design, educate, and implement AI systems that create meaningful change. Whether you're just exploring AI or ready to automate your core operations, we bring strategy, clarity, and execution under one roof.<br /><br />
                We don't just build AI workflows. We teach your team how to think in AI.
              </AboutText>
            </AboutCard>
          </AboutSectionFlex>
        </Section>
        <SectionDivider />
        {/* Services Section */}
        <Section as="section" bg="#1a1d2b">
          <SectionTitle>Our Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard whileHover={{ scale: 1.05 }}>
              <ServiceIcon>🎓</ServiceIcon>
              <ServiceTitle>AI Education</ServiceTitle>
              <ServiceDesc>Workshops and training to help your team think in AI and leverage automation.</ServiceDesc>
            </ServiceCard>
            <ServiceCard whileHover={{ scale: 1.05 }}>
              <ServiceIcon>💡</ServiceIcon>
              <ServiceTitle>Consultation</ServiceTitle>
              <ServiceDesc>Expert advice to identify, plan, and strategize your AI transformation journey.</ServiceDesc>
            </ServiceCard>
            <ServiceCard whileHover={{ scale: 1.05 }}>
              <ServiceIcon>⚙️</ServiceIcon>
              <ServiceTitle>Automation</ServiceTitle>
              <ServiceDesc>Custom AI workflow development and integration for your business needs.</ServiceDesc>
            </ServiceCard>
          </ServicesGrid>
        </Section>
        <SectionDivider />
        {/* How We Work Section */}
        <Section as="section">
          <SectionTitle>How We Work</SectionTitle>
          <ProcessGrid>
            {[
              { step: '1', title: 'Discover', desc: 'Understand your business, goals, and challenges.' },
              { step: '2', title: 'Strategize', desc: 'Design a tailored AI roadmap and education plan.' },
              { step: '3', title: 'Implement', desc: 'Develop, integrate, and automate with ongoing support.' },
            ].map(({ step, title, desc }) => (
              <ProcessCard
                key={step}
                whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(250,204,21,0.18)' }}
              >
                <ProcessStep>{step}</ProcessStep>
                <ProcessTitle>{title}</ProcessTitle>
                <ProcessDesc>{desc}</ProcessDesc>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </Section>
        <SectionDivider />
        {/* Contact Section with Typeform and contact links */}
        <Section as="section" bg="#1a1d2b" id="contact">
          <SectionTitle as={motion.h2} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>Contact Us</SectionTitle>
          <SectionText as={motion.p} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>Ready to elevate your business with AI? Reach out to us!</SectionText>
          <ContactButton
            href="https://cabeza.app.n8n.cloud/form/d755770d-d9dc-43d5-989a-a232930ee3e6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            style={{ marginTop: '2.5rem' }}
          >
            Open Contact Form
          </ContactButton>
          <ContactLinksRow>
            <ContactLink href="mailto:cabeza.ai.info@gmail.com" target="_blank" rel="noopener noreferrer">
              <ContactIcon><FaEnvelope /></ContactIcon>
              cabeza.ai.info@gmail.com
            </ContactLink>
            <ContactLink href="https://linkedin.com/company/cabeza-ai" target="_blank" rel="noopener noreferrer">
              <ContactIcon><FaLinkedin /></ContactIcon>
              LinkedIn
            </ContactLink>
          </ContactLinksRow>
        </Section>
        {/* Call to Action Footer (no phone number) */}
        <CTAFooter
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CTAHeadline
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Ready to start building smarter?
          </CTAHeadline>
          <CTASubtext
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's explore what AI can do for your business.
          </CTASubtext>
          <CTAButton
            href="https://cabeza.app.n8n.cloud/form/d755770d-d9dc-43d5-989a-a232930ee3e6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Discovery Call
          </CTAButton>
        </CTAFooter>
        <Footer>
          &copy; {new Date().getFullYear()} Cabeza.ai. All rights reserved.
        </Footer>
      </Wrapper>
    </>
  );
} 