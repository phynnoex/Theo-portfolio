import { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCards/ProjectCard';
import HeroSection from './Sections/HeroSection/HeroSection';
import AboutSection from './Sections/AboutSection/AboutSection';
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
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <div className="projectsSection">
        <ProjectCard 
          projectTitle='Quiz App'
          AppType='Mobile Application'
          stack={['React-Native', 'Expo', 'Firebase']}
          projectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        />
      </div>
    </>
  )
}

export default App
