import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { 
  FaRegLightbulb, 
  FaBrain, 
  FaLinkedin, 
  FaEnvelope, 
  FaRobot, 
  FaMicrochip, 
  FaNetworkWired,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaCog,
  FaGraduationCap,
  FaHandshake,
  FaCode,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaQuoteLeft,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaDollarSign
} from 'react-icons/fa';
import Header from '../components/Header';

// Global font styles
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 400;
    background: #0a0a0f;
    color: #fff;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Inter', Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  * {
    box-sizing: border-box;
  }
`;

// Enhanced animations
const float = keyframes`
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
  100% { transform: translateY(0px) scale(1); }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Enhanced Hero Background
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

const Wrapper = styled.div`
  background: #0a0a0f;
  min-height: 100vh;
  color: #fff;
  position: relative;
`;

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

// Enhanced Hero Components
const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  width: 100%;
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

// Enhanced Section Components
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

// Stats Section
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

// Enhanced Services Section
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

// Enhanced Process Section
const ProcessGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
`;

const ProcessCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(15, 52, 96, 0.6) 100%);
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 1px solid rgba(120, 119, 198, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(120, 119, 198, 0.1), rgba(255, 119, 198, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ProcessStep = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 10px 30px rgba(120, 119, 198, 0.3);
`;

const ProcessTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
`;

const ProcessDesc = styled.p`
  color: #a8b2d1;
  font-size: 1rem;
  line-height: 1.6;
`;

// Testimonials Section
const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%);
  border-radius: 2rem;
  padding: 2.5rem;
  border: 1px solid rgba(120, 119, 198, 0.2);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 2rem;
    font-size: 4rem;
    color: rgba(120, 119, 198, 0.3);
    font-family: serif;
  }
`;

const TestimonialText = styled.p`
  color: #a8b2d1;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #7877c6, #ff77c6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  color: #fff;
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const AuthorTitle = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
`;

// Enhanced Footer
const Footer = styled.footer`
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  padding: 3rem 1rem 2rem;
  text-align: center;
  color: #8892b0;
  border-top: 1px solid rgba(120, 119, 198, 0.2);
`;

// Floating Icons
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

// Animation variants
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

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);
  
  useEffect(() => {
    // Wait for the page to be fully loaded before enabling animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "🧠 What does Cabeza.ai do?",
      answer: "Cabeza.ai helps businesses and individuals adopt AI intentionally — not just as a tool, but as a system for scale. We educate teams, consult on automation strategy, and build custom AI solutions that reduce manual work, unlock insights, and speed up operations.",
      details: [
        "AI Literacy & Team Workshops",
        "Automation & Workflow Audits", 
        "AI Agent and SaaS Development",
        "No-code and low-code integration support"
      ]
    },
    {
      question: "🤖 Who is Cabeza.ai for?",
      answer: "We work with founders & startups looking to streamline operations, growing teams who want to implement automation without hiring extra people, businesses exploring AI for productivity, support, marketing, or lead generation, and non-technical teams who want to learn AI and implement it the right way.",
      details: [
        "Founders & Startups looking to streamline operations",
        "Growing Teams who want automation without extra hiring",
        "Businesses exploring AI for productivity & growth",
        "Non-technical teams learning AI implementation"
      ]
    },
    {
      question: "🚀 What problems can you help solve with AI?",
      answer: "We've helped clients automate lead gen and qualification, respond to customers using custom-trained GPT agents, create daily reports from raw data, generate proposals and outreach emails, build SaaS MVPs for internal tools, and streamline support workflows across teams.",
      details: [
        "Automate lead generation and qualification",
        "Custom-trained GPT agents for customer support",
        "Daily reports from raw data",
        "Generate proposals, emails, and summaries",
        "Build SaaS MVPs for internal tools",
        "Streamline support workflows"
      ]
    },
    {
      question: "🧩 I'm new to AI — do I need technical knowledge?",
      answer: "Not at all. We specialize in making AI understandable and actionable for non-technical teams. Our workshops and consulting sessions teach you what you need to know without the jargon.",
      details: [
        "What tools matter",
        "What's hype vs. real",
        "How to think in systems, not just prompts"
      ]
    },
    {
      question: "🔍 What happens after I fill out the contact form?",
      answer: "Once you submit the form, we'll review your inputs and send you a personalized response within 1–2 business days. You'll receive a free AI opportunity mapping or discovery call, recommended next steps based on your goals, and options to start a workshop, audit, or build engagement."
    },
    {
      question: "💬 Do you offer 1:1 consulting?",
      answer: "Yes — we offer both one-time consulting sessions and ongoing partnerships. Whether you want to brainstorm AI use cases or need help implementing a system end-to-end, we tailor our approach based on your team size, workflow, and budget."
    },
    {
      question: "🔧 Can you build custom AI tools or SaaS for my business?",
      answer: "Absolutely. We work with early-stage founders and product teams to prototype, build, and deploy custom AI-powered SaaS or internal tools. If you have a business case or MVP in mind, we'll help you shape it, build it, and ship it — fast."
    },
    {
      question: "💸 What do your services cost?",
      answer: "We offer flexible pricing based on scope: Free Discovery & Audit Call for qualified leads, Workshops starting at $199, Custom Automation Projects typically range from $500 to $5000+, and SaaS or Agent Development is quoted per project with milestone-based pricing.",
      details: [
        "Free Discovery & Audit Call for qualified leads",
        "Workshops starting at $199",
        "Custom Automation Projects: $500 to $5000+",
        "SaaS or Agent Development: quoted per project"
      ]
    },
    {
      question: "🌍 Do you work with clients outside of India?",
      answer: "Yes — Cabeza.ai is fully remote and works with clients across the globe. Whether you're in the US, Europe, or anywhere else, we can collaborate via virtual workshops, calls, and async tools."
    },
    {
      question: "📩 How can I get started?",
      answer: "Just fill out our quick form and tell us what you're looking for. Still have questions? Reach out anytime at cabeza.ai.info@gmail.com - we'd love to connect."
    }
  ];

  const displayedFAQs = showAllFAQs ? faqData : faqData.slice(0, 3);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Head>
          <title>Cabeza.ai - Elevating Intelligence with AI-First Solutions</title>
          <meta name="description" content="Transform your business with AI-first strategies. Cabeza.ai provides education, consultation, and automation solutions to help you think and work smarter." />
          <meta name="keywords" content="AI automation, business intelligence, AI education, workflow automation, artificial intelligence consulting" />
          <link rel="icon" href="/favicon.ico" />
          <script
            dangerouslySetInnerHTML={{
              __html: 'window.chtlConfig = { chatbotId: "8733226775" }'
            }}
          />
          <script
            async
            data-id="8733226775"
            id="chtl-script"
            type="text/javascript"
            src="https://chatling.ai/js/embed.js"
          />
        </Head>

        {/* Hero Section */}
        <Section fullHeight>
          <HeroBg />
          
          {/* Static Hero Content - Simplified structure */}
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

          {/* Animated elements only after load */}
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

        {/* Stats Section */}
        {/* <Section bg="#0f0f1a">
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1000px', marginTop: '2rem' }}
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              { number: "500+", label: "AI Workflows Built" },
              { number: "50+", label: "Companies Transformed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                style={{ textAlign: 'center', padding: '2rem' }}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: '3rem', fontWeight: '900', color: '#7877c6', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <p style={{ color: '#a8b2d1', fontSize: '1.1rem', fontWeight: '500' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section> */}

        {/* Services Section */}
        <Section id="services">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive AI solutions designed to transform how you think and work
          </SectionSubtitle>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1200px', marginTop: '2rem' }}
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            <motion.div 
              style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', borderRadius: '2rem', padding: '3rem 2rem', border: '1px solid rgba(120, 119, 198, 0.2)', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(120, 119, 198, 0.2)' }}
            >
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #7877c6, #ff77c6)', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem', color: '#fff', boxShadow: '0 10px 30px rgba(120, 119, 198, 0.3)' }}>
                <FaGraduationCap />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center', color: '#fff' }}>
                AI Education & Training
              </h3>
              <p style={{ color: '#a8b2d1', textAlign: 'center', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Comprehensive workshops and training programs to help your team develop AI-first thinking
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Custom training programs
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Hands-on workshops
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Ongoing support & resources
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Team certification
                </li>
              </ul>
            </motion.div>

            <motion.div 
              style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', borderRadius: '2rem', padding: '3rem 2rem', border: '1px solid rgba(120, 119, 198, 0.2)', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(120, 119, 198, 0.2)' }}
            >
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #7877c6, #ff77c6)', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem', color: '#fff', boxShadow: '0 10px 30px rgba(120, 119, 198, 0.3)' }}>
                <FaHandshake />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center', color: '#fff' }}>
                Strategic Consultation
              </h3>
              <p style={{ color: '#a8b2d1', textAlign: 'center', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Expert guidance to identify opportunities and create your AI transformation roadmap
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Business process analysis
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> AI strategy development
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> ROI optimization
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Implementation planning
                </li>
              </ul>
            </motion.div>

            <motion.div 
              style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', borderRadius: '2rem', padding: '3rem 2rem', border: '1px solid rgba(120, 119, 198, 0.2)', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(120, 119, 198, 0.2)' }}
            >
              <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, #7877c6, #ff77c6)', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem', color: '#fff', boxShadow: '0 10px 30px rgba(120, 119, 198, 0.3)' }}>
                <FaCode />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', textAlign: 'center', color: '#fff' }}>
                Custom AI Automation
              </h3>
              <p style={{ color: '#a8b2d1', textAlign: 'center', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Bespoke AI workflow development and integration for your specific business needs
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Custom workflow design
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> API integration
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Testing & deployment
                </li>
                <li style={{ color: '#8892b0', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#7877c6', fontWeight: 'bold' }}>✓</span> Maintenance & updates
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </Section>

        {/* Process Section */}
        <Section bg="#0f0f1a" id="process">
          <SectionTitle>How We Work</SectionTitle>
          <SectionSubtitle>
            Our proven methodology ensures successful AI implementation and adoption
          </SectionSubtitle>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1000px', marginTop: '2rem' }}
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              {
                step: "1",
                title: "Discover & Analyze",
                desc: "We dive deep into your business processes, goals, and challenges to identify AI opportunities."
              },
              {
                step: "2",
                title: "Strategize & Plan",
                desc: "We design a comprehensive AI roadmap tailored to your specific needs and objectives."
              },
              {
                step: "3",
                title: "Educate & Train",
                desc: "Your team learns AI-first thinking through hands-on workshops and training programs."
              },
              {
                step: "4",
                title: "Implement & Optimize",
                desc: "We build, deploy, and continuously optimize your AI solutions for maximum impact."
              }
            ].map((process, index) => (
              <motion.div 
                key={index} 
                style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.6) 0%, rgba(15, 52, 96, 0.6) 100%)', borderRadius: '2rem', padding: '2.5rem 2rem', textAlign: 'center', border: '1px solid rgba(120, 119, 198, 0.2)', position: 'relative', overflow: 'hidden' }}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(120, 119, 198, 0.2)' }}
              >
                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #7877c6, #ff77c6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', boxShadow: '0 10px 30px rgba(120, 119, 198, 0.3)' }}>
                  {process.step}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: '#fff' }}>
                  {process.title}
                </h3>
                <p style={{ color: '#a8b2d1', fontSize: '1rem', lineHeight: '1.6' }}>
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Testimonials Section - Commented out
        <Section>
          <SectionTitle>What Our Clients Say</SectionTitle>
          <SectionSubtitle>
            Real results from real businesses that transformed with AI
          </SectionSubtitle>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1200px', marginTop: '2rem' }}
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {[
              {
                text: "Cabeza.ai transformed our entire approach to business operations. Their AI education program helped our team think differently and their automation solutions saved us 40+ hours per week.",
                name: "Sarah Chen",
                title: "CEO, TechFlow Solutions"
              },
              {
                text: "The strategic consultation we received was invaluable. They didn't just implement AI - they helped us understand how to leverage it for sustainable growth.",
                name: "Marcus Rodriguez",
                title: "Founder, GrowthLab"
              },
              {
                text: "Working with Cabeza.ai was a game-changer. Their custom automation solutions streamlined our processes and their ongoing support ensures we stay ahead of the curve.",
                name: "Emily Watson",
                title: "Operations Director, InnovateCorp"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', borderRadius: '2rem', padding: '2.5rem', border: '1px solid rgba(120, 119, 198, 0.2)', position: 'relative' }}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(120, 119, 198, 0.2)' }}
              >
                <div style={{ position: 'absolute', top: '1rem', left: '2rem', fontSize: '4rem', color: 'rgba(120, 119, 198, 0.3)', fontFamily: 'serif' }}>
                  "
                </div>
                <p style={{ color: '#a8b2d1', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem', fontStyle: 'italic' }}>
                  {testimonial.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #7877c6, #ff77c6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff' }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '0.2rem' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ color: '#8892b0', fontSize: '0.9rem' }}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
        */}

        {/* FAQ Section */}
        <Section id="faq">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Everything you need to know about working with Cabeza.ai
          </SectionSubtitle>
          <motion.div 
            style={{ maxWidth: '800px', width: '100%', marginTop: '2rem' }}
            variants={staggerContainer}
          >
            {faqData.map((faq, i) => {
              if (!showAllFAQs && i > 2) return null;
              return (
                <motion.div 
                  key={i}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', 
                    borderRadius: '1.5rem', 
                    padding: '1.5rem', 
                    marginBottom: '1rem',
                    border: '1px solid rgba(120, 119, 198, 0.2)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  variants={fadeInUp}
                  whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(120, 119, 198, 0.15)' }}
                  onClick={() => toggleFAQ(i)}
                >
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: expandedFAQs.includes(i) ? '1rem' : '0'
                  }}>
                    <h3 style={{ 
                      color: '#fff', 
                      fontSize: '1.1rem', 
                      fontWeight: '600', 
                      margin: 0,
                      lineHeight: '1.4',
                      flex: 1,
                      textAlign: 'left'
                    }}>
                      {faq.question}
                    </h3>
                    <motion.div
                      style={{
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7877c6',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        marginLeft: '1rem'
                      }}
                      animate={{ rotate: expandedFAQs.includes(i) ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {expandedFAQs.includes(i) && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{ 
                          color: '#a8b2d1', 
                          fontSize: '0.95rem', 
                          lineHeight: '1.6', 
                          marginBottom: faq.details ? '1rem' : '0'
                        }}>
                          {faq.answer}
                        </p>
                        {faq.details && (
                          <ul style={{ 
                            color: '#8892b0', 
                            fontSize: '0.9rem', 
                            lineHeight: '1.6',
                            margin: '0',
                            paddingLeft: '1.5rem'
                          }}>
                            {faq.details.map((detail, detailIndex) => (
                              <li key={detailIndex} style={{ marginBottom: '0.4rem' }}>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            
            {!showAllFAQs && (
              <motion.div
                style={{ textAlign: 'center', marginTop: '2rem' }}
                variants={fadeInUp}
              >
                <motion.button
                  onClick={() => setShowAllFAQs(true)}
                  style={{
                    background: 'linear-gradient(135deg, #7877c6, #ff77c6)',
                    color: '#fff',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show More Questions ({faqData.length - 3} more)
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </Section>

        {/* Contact Section */}
        <Section bg="#0f0f1a" id="contact">
          <SectionTitle>Ready to Transform Your Business?</SectionTitle>
          <SectionSubtitle>
            Let's discuss how AI can elevate your operations and drive growth
          </SectionSubtitle>
          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', width: '100%', maxWidth: '1000px', marginTop: '2rem' }}
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            <motion.div 
              style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', borderRadius: '2rem', padding: '3rem 2rem', border: '1px solid rgba(120, 119, 198, 0.2)' }}
              variants={fadeInUp}
            >
              <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>Get in Touch</h3>
              <p style={{ color: '#a8b2d1', marginBottom: '2rem', lineHeight: '1.6' }}>
                Ready to start your AI transformation? We're here to help you navigate the journey 
                and achieve real results. Book a free consultation to explore possibilities.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <motion.a
                  href="https://cabeza.app.n8n.cloud/form/d755770d-d9dc-43d5-989a-a232930ee3e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'linear-gradient(135deg, #7877c6, #ff77c6)', color: '#fff', fontWeight: '600', fontSize: '1rem', borderRadius: '2rem', textDecoration: 'none', transition: 'all 0.3s ease', justifyContent: 'center' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fill Contact Form <FaArrowRight />
                </motion.a>
                <motion.a
                  href="https://calendly.com/cabeza-ai-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'rgba(120, 119, 198, 0.1)', color: '#fff', fontWeight: '600', fontSize: '1rem', borderRadius: '2rem', textDecoration: 'none', transition: 'all 0.3s ease', justifyContent: 'center', border: '1px solid rgba(120, 119, 198, 0.3)' }}
                  whileHover={{ scale: 1.05, background: 'rgba(120, 119, 198, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  📅 Book 30-Min Call
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              style={{ background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(15, 52, 96, 0.8) 100%)', borderRadius: '2rem', padding: '3rem 2rem', border: '1px solid rgba(120, 119, 198, 0.2)' }}
              variants={fadeInUp}
            >
              <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>Quick Contact</h3>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                <a
                  href="mailto:cabeza.ai.info@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '500', color: '#a8b2d1', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '1rem', transition: 'all 0.3s ease' }}
                >
                  <FaEnvelope /> cabeza.ai.info@gmail.com
                </a>
                <a
                  href="https://linkedin.com/company/cabeza-ai"
                  target="_blank"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '500', color: '#a8b2d1', textDecoration: 'none', padding: '0.5rem 1rem', borderRadius: '1rem', transition: 'all 0.3s ease' }}
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(120, 119, 198, 0.1)', borderRadius: '1rem' }}>
                <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Why Choose Cabeza.ai?</h4>
                <ul style={{ color: '#a8b2d1', lineHeight: '1.6' }}>
                  <li>✓ Proven track record with 50+ companies</li>
                  <li>✓ Custom solutions, not one-size-fits-all</li>
                  <li>✓ Ongoing support and optimization</li>
                  <li>✓ Focus on education and adoption</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        <Footer>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Cabeza.ai</h3>
            <p style={{ color: '#8892b0', marginBottom: '1rem' }}>
              Elevating Intelligence — Naturally and Artificially
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(120, 119, 198, 0.2)', paddingTop: '2rem' }}>
            &copy; {new Date().getFullYear()} Cabeza.ai. All rights reserved.
          </div>
        </Footer>
      </Wrapper>
    </>
  );
} 