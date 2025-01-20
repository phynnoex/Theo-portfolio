import { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCards/ProjectCard';
import HeroSection from './Sections/HeroSection/HeroSection';
import AboutSection from './Sections/AboutSection/AboutSection';
import projects from './Data/projects';
import TestButton from './testButton/testButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
AboutSection
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <div className='logo'>BANKOLE <br /> THEOPHILUS</div>
        <div className='menus'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className='toggleLight'>
          <div className='toggleSocket'>
            <div className='toggleBall'></div>
          </div>
        </div>
      </div>
      
      <div className="noise-overlay"></div>
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
    </>
  )
}

export default App
