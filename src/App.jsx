import { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './Sections/HeroSection/HeroSection';
import NavSection from './Sections/NavSection/navSection';
import AboutSection from './Sections/AboutSection/ABOUTsECTION.JSX';
import projects from './Data/projects';
import ProjectCard from './components/ProjectCards/ProjectCard';
import BalloonSection from './Sections/Balloons3d/BalloonSection';
import MobileMenu from './Sections/MobileMenu/MobileMenu';
import { AnimatePresence } from 'framer-motion';
import FooterSection from './Sections/FooterSection/FooterSection';
import ProjectSection from './Sections/ProjectSection';


function App() {
  const [count, setCount] = useState(0)
  const [checkMenuClicked, setCheckMenuClicked] = useState(false)
  const [toggleState, setToggleState] = useState(true);
  
  useEffect(() => {
    if (checkMenuClicked) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset when component unmounts
    };
  }, [checkMenuClicked]);

  return (
    <>
    <AnimatePresence>
      {checkMenuClicked && <MobileMenu checkMenuClicked={checkMenuClicked} setCheckMenuClicked={setCheckMenuClicked}/>}
    </AnimatePresence>
      <NavSection checkMenuClicked={checkMenuClicked} setCheckMenuClicked={setCheckMenuClicked} toggleState={toggleState} setToggleState={setToggleState}/>
      {toggleState && <BalloonSection></BalloonSection>}
      <div className="noie-overlay"></div>
      
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
      
      
      <FooterSection/>
    </>
  )
}

export default App
