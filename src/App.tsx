import { useEffect, useState } from 'react';
import BootScreen from './components/BootScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIIntro from './components/AIIntro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import LearningJourney from './components/LearningJourney';
import Certifications from './components/Certifications';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProgress, BackToTop } from './components/Chrome';
import { SectionDivider } from './components/SectionWrapper';

function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = booted ? '' : 'hidden';
  }, [booted]);

  return (
    <div className="relative min-h-screen bg-bg text-slate-200">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/4 top-0 h-[40vmin] w-[40vmin] -translate-x-1/2 rounded-full bg-primary/8 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 h-[40vmin] w-[40vmin] translate-x-1/2 rounded-full bg-secondary/10 blur-[160px]" />
      </div>

      <ScrollProgress />

      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div
        className={`relative z-10 transition-opacity duration-700 ${
          booted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <AIIntro />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <LearningJourney />
          <SectionDivider />
          <Certifications />
          <SectionDivider />
          <GitHubSection />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
