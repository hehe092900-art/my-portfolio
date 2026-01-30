import Box from '@mui/material/Box';
import HeroSection from '../components/landing/hero-section';
import AboutMeSection from '../components/landing/about-me-section';
import SkillTreeSection from '../components/landing/skill-tree-section';
import ProjectsSection from '../components/landing/projects-section';
import ContactSection from '../components/landing/contact-section';

/**
 * Home 페이지 컴포넌트
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <Home />
 */
function Home() {
  return (
    <Box component="main">
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default Home;
