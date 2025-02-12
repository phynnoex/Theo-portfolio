import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactCard.css';

export default function ContactCard(props) {
    const handleClick = () =>{
        window.open(props.contactLink, "_blank");
    }
    const [buttonHover, setButtonHover] = React.useState(false);
    return(
        <motion.div className='contactButton' onClick={handleClick}
        
        onHoverStart={() => setButtonHover(true)}
        onHoverEnd={() => setButtonHover(false)}    
        animate={{
            backgroundColor: buttonHover ? "rgba(242,242,242,0.2)" : "transparent",
            boxShadow: buttonHover ? "0px 0px 3px black" : "none",
        }}
        >
            <motion.div className='contactIcon'
            animate={{
                // color: buttonHover ? "black" : "#f2f2f2",
                y: buttonHover ? [10, 0] : 0,
                borderColor: buttonHover ? "black" : "white",
                
            }}
            >
              <FontAwesomeIcon icon={props.faIcon} />
            </motion.div>
            <motion.div className='buttonText'
                animate={{
                    // color: buttonHover ? "black" : "white",
                    
                }}
            >{props.ContactTitle}</motion.div>
        </motion.div>
    )
}