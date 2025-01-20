import React, { useState } from 'react';
import { delay, easeIn, motion } from 'framer-motion';
import './testButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function TestButton(props) {
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
                {props.title}
            </motion.div>
        </motion.div>
    );
}
