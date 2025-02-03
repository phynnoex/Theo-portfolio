import React from 'react';
import './MobileMenu.css';
import { delay,easeIn, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackXmark, faX } from '@fortawesome/free-solid-svg-icons';

export default function MobileMenu({checkMenuClicked, setCheckMenuClicked}) {

    const handleMenuClick = () => {
        setCheckMenuClicked(!checkMenuClicked);
      };
    return(
        <motion.div
        
        className="MobileMenu">
            <motion.div className="menuCircle"
                animate={{
                    scale: checkMenuClicked ? [0, 100] : [100, 0],
                    
                }}
                transition={{
                    duration: 1,
                }}
                exit={{scale: [100, 0]}}
            >
                
            </motion.div>
            <motion.div className="menuItems" 
                animate={{
                    x: checkMenuClicked ? [1000, 0] : [0, 1000],
                }}
                transition={
                    {
                        duration: 0.5,
                        delay: 0,
                        bounce: 0.5,
                }
                
            }
            exit={{x: [0, 1000]}}
            
            >
                <div className='Heading'>
                    <div className='nameLogo'>BANKOLE <br />THEOPHILUS</div>
                    <div className='Xicon' onClick={handleMenuClick}><FontAwesomeIcon  icon={faX}/></div>
                </div>
                <div className='menuList'>
                    <ul>
                        <li>Hello</li>
                        <li>Projects</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className='randomText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolorum dolore .</div>
                <div className='footer'>COPYRIGHT @ 2025</div>
            </motion.div>
        </motion.div>
    )
}