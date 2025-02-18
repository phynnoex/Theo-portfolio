import React from 'react';
import './SkillCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { delay,easeIn, motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillCard(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="testButton"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{
                
            }}
        >
            <motion.div className='boxTile'
                animate={{
                    scaleX: hovered ? [props.width+0.05, 0,0, props.width] : props.width,
                    scaleY: hovered ? [1, 1,10, 10] : 1,
                }}
                transition={{
                    duration: 0.5,
                    ease: easeIn.easeInOut,
                }}
                style={{transformOrigin: 'bottom left'}}
            >

            </motion.div>
            <motion.div className='boxContent'
                animate={{
                    color: hovered ? "white" : "black",
                }}
                transition={{
                    delay: 0.3,
                }}
            >
                <FontAwesomeIcon icon={props.icon}
                    style={{
                        marginRight: '10px',
                        fontSize:'20px'
                    }}
                />
                <p
                    style={{
                        fontSize: '15px',
                        fontWeight: '300',
                    }}
                >{props.title}</p>
            </motion.div>
        </motion.div>
    );
}
