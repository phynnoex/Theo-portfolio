import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import React from 'react';
import './LinkCard.css';

export default function LinkCard({githubLink, siteLink, linkTitle, isPrimary}) {
    const [isbuttonHovered, setIsButtonHovered] = React.useState(false);

    const handleLinkClick = () => {
        const url = isPrimary ? githubLink : siteLink;
        console.log("Opening URL:", url); // ✅ Debugging
        if (url) {
            if (url.includes("snack.expo.dev")) {
                window.location.href = url; // ✅ Opens in the same tab (bypasses pop-up blocker)
            } else {
                window.open(url, "_blank", "noopener,noreferrer");
            }
        } else {
            console.error("Invalid URL:", url);
        }
    };

    return (
        <motion.div 
            className={isPrimary ? "LinkbuttonPrimary" : "LinkbuttonSecondary"}
            onTap={handleLinkClick}  // ✅ Fix Framer Motion blocking clicks
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
            animate={{
                backgroundColor: isPrimary ? (isbuttonHovered ? "transparent" : "black") : "transparent",
                boxShadow: isbuttonHovered ? "0px 6px 1px black" : "none",
                color: isPrimary ? (isbuttonHovered ? "black" : "white") : "black",
                border: isPrimary ? (isbuttonHovered ? "1px solid black" : "none") : "1px solid black",
                y: isbuttonHovered ? [0,-2] : 0,
            }}
        >
            {isPrimary && <FontAwesomeIcon className='github' icon={faGithub} />}
            <div className='linkTitle'>{linkTitle}</div>
            <div>
                <FontAwesomeIcon className='arrow' icon={faArrowRight} />
            </div>
        </motion.div>
    );
}
