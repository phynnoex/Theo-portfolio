import ContactCard from "../../components/contactCards/ContactCard";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [checkMenuClicked, setCheckMenuClicked] = useState(false);
    return (
      
        <div className='heroSection'>
            <div className='heroText'>
              <div className='devText'>FRONTEND DEVELOPER</div>
              <div className='designText'>& <br />Designer</div>
            </div>
            <div className='heroContacts'>
              <ContactCard ContactTitle='Github' faIcon={faGithub} contactLink={"https://github.com/phynnoex"}/>
              <ContactCard ContactTitle='Email' faIcon={faEnvelope} contactLink={"bankoletheophilus@gmail.com"}/>
              <ContactCard ContactTitle='LinkedIn' faIcon={faLinkedin} contactLink = {"https://www.linkedin.com/in/phoenix-theophilus-7b3781203/"}/>
            </div>
        </div>
      
    )
}