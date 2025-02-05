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


function App() {
  const [count, setCount] = useState(0)
  const [checkMenuClicked, setCheckMenuClicked] = useState(false)
  
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
      <NavSection checkMenuClicked={checkMenuClicked} setCheckMenuClicked={setCheckMenuClicked}/>
      <div className="noise-overlay"></div>
      {/* <BalloonSection></BalloonSection> */}
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>

      <div className='projectsSection'>
        {
          projects.map((project) => {
            console.log(project.index)
            return <ProjectCard key= {project.index} projectTitle={project.projectTitle} AppType={project.AppType} stack={project.stack} projectDescription={project.projectDescription} Pindex={project.index} />
          })
          
        }
      </div>
      
      <FooterSection/>
    </>
  )
}

export default App
