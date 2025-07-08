import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { FaBrain, FaRobot, FaMicrochip, FaNetworkWired, FaArrowRight } from 'react-icons/fa';

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
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease-in-out infinite;
  opacity: 0.8;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
    animation: ${gradientMove} 20s ease-in-out infinite reverse;
  }
`;

const HeroLogo = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 2rem;
  border-radius: 2rem;
  box-shadow: 0 20px 60px rgba(120, 119, 198, 0.3);
  border: 3px solid rgba(120, 119, 198, 0.2);
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #7877c6 50%, #ff77c6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(120, 119, 198, 0.5);
`;

const GoldDot = styled.span`
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: #a8b2d1;
  margin-bottom: 2rem;
  font-weight: 500;
  max-width: 600px;
  line-height: 1.4;
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: #8892b0;
  margin-bottom: 3rem;
  max-width: 500px;
  line-height: 1.6;
`;

const HeroCTA = styled(motion.a)`
  padding: 1.2rem 3rem;
  background: linear-gradient(135deg, #7877c6 0%, #ff77c6 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 3rem;
  box-shadow: 0 10px 40px rgba(120, 119, 198, 0.4);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(120, 119, 198, 0.6);
    background: linear-gradient(135deg, #ff77c6 0%, #7877c6 100%);
  }
`;

const HeroIcon = styled(motion.div)<{ pos: string }>`
  position: absolute;
  ${({ pos }) => pos};
  z-index: 0;
  opacity: 0.1;
  font-size: 4rem;
  color: #7877c6;
  pointer-events: none;
  @media (max-width: 600px) {
    font-size: 2.5rem;
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

// Section styled-component (copied from main file)
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

const HeroSection = ({ isLoaded }: { isLoaded: boolean }) => (
  <Section fullHeight>
    <HeroBg />
    <motion.div
      style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '1200px', width: '100%' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp}>
        <HeroLogo src="/logo.png" alt="Cabeza.ai Logo" />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <HeroTitle>
          CABEZA<GoldDot>.AI</GoldDot>
        </HeroTitle>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <HeroSubtitle>
          Elevating Intelligence — <GoldDot>Naturally and Artificially</GoldDot>
        </HeroSubtitle>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <HeroDescription>
          Transform your business with AI-first strategies. We help ambitious teams design, 
          educate, and implement intelligent systems that drive real results.
        </HeroDescription>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <HeroCTA 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your AI Journey <FaArrowRight />
        </HeroCTA>
      </motion.div>
    </motion.div>
    {isLoaded && (
      <>
        <HeroIcon
          pos="top: 10%; left: 5%;"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaBrain />
        </HeroIcon>
        <HeroIcon
          pos="top: 20%; right: 8%;"
          animate={{ x: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaRobot />
        </HeroIcon>
        <HeroIcon
          pos="bottom: 15%; left: 10%;"
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaMicrochip />
        </HeroIcon>
        <HeroIcon
          pos="bottom: 20%; right: 5%;"
          animate={{ x: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaNetworkWired />
        </HeroIcon>
      </>
    )}
  </Section>
);

export default HeroSection; 