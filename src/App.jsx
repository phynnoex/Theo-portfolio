import { useState } from 'react';
import './App.css';
import HeroSection from './Sections/HeroSection/HeroSection';
import NavSection from './Sections/NavSection/navSection';
import AboutSection from './Sections/AboutSection/ABOUTsECTION.JSX';
import projects from './Data/projects';
import ProjectCard from './components/ProjectCards/ProjectCard';
import BalloonSection from './Sections/Balloons3d/BalloonSection';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <NavSection/>
      <div className="noise-overlay"></div>
      <BalloonSection></BalloonSection>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>

      {/* <div className='projectsSection'>
        {
          projects.map((project) => {
            console.log(project.index)
            return <ProjectCard key= {project.index} projectTitle={project.projectTitle} AppType={project.AppType} stack={project.stack} projectDescription={project.projectDescription} Pindex={project.index} />
          })
          
        }
      </div> */}
    </>
  )
}

export default App
