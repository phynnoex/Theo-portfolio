import React from 'react';
import './SkillCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SkillCard(props) {
    return (
        <div className="skillCard">
            <div className="wthSkillMeter">
                <div className="logo">
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <p className="skillText">{props.skillTitle}</p>
            </div>
            <div
                className="skillMeter"
                style={{ width: `${props.levelOfTen * 14.5}px` }} // Add % as the unit
            ></div>
        </div>
    );
}
