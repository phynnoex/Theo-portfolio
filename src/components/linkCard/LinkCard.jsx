import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './LinkCard.css';

export default function LinkCard({linkTitle,isPrimary}) {
    return(
        <div className={isPrimary ? "LinkbuttonPrimary": "LinkbuttonSecondary"}>
            {isPrimary ? <FontAwesomeIcon className='github' icon={faGithub} /> : null}
            <div className='linkTitle'>{linkTitle}</div>
            <div>
                <FontAwesomeIcon className='arrow' icon={faArrowRight}/>
            </div>
        </div>
    )
}