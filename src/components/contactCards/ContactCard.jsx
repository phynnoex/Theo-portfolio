import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ContactCard.css';

export default function ContactCard(props) {
    return(
        <div className='contactButton'>
            <div className='contactIcon'>
              <FontAwesomeIcon icon={props.faIcon} />
            </div>
            <div className='buttonText'>{props.ContactTitle}</div>
        </div>
    )
}