import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import reactLogo from './assets/react.svg';
import profilePicture from './assets/profile-pic.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillCard from './components/skills/SkillCard';
import ContactCard from './components/contactCards/ContactCard';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from './components/ProjectCards/ProjectCard';

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
      <div className='heroSection'>
        <div className='heroText'>
          <div className='devText'>FRONTEND DEVELOPER</div>
          <div className='designText'>& <br />Designer</div>
        </div>
        <div className='heroContacts'>
          <ContactCard ContactTitle='Github' faIcon={faGithub} />
          <ContactCard ContactTitle='Email' faIcon={faEnvelope} />
          <ContactCard ContactTitle='LinkedIn' faIcon={faLinkedin} />
        </div>
      </div>
      <div className='aboutSection'>
          <div className='leftStyle'>
              <div className='leftBar'></div>
          </div>
          <div className='mainAbout'>
            <div className='LeftMainAbout'>
              <div className='topMainAbout'>
                <h2 className='aboutTitle'>../About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>   
              <div className='bottomMainAbout'>
                <h3>Skills</h3>
                <div className='skills'>
                  <SkillCard skillTitle='HTML' levelOfTen={8} />
                  <SkillCard skillTitle='CSS' levelOfTen={7} />
                  <SkillCard skillTitle='Javascript' levelOfTen={6} />
                  <SkillCard skillTitle='React' levelOfTen={5} />
                  <SkillCard skillTitle='Node' levelOfTen={4} />
                </div>
              </div>
            </div>
            <div className="rightMainAbout">
              <div className="ImgCard">
                <div className="profilePicture"></div>
              </div>
            </div>
          </div>
      </div>
      <div className="projectsSection">
        <ProjectCard></ProjectCard>
      </div>
    </>
  )
}

export default App
