import ContactCard from "../../components/contactCards/ContactCard";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function HeroSection() {
    return (
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
    )
}