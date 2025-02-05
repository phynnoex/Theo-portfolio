import React from 'react';
import './FooterSection.css'

export default function FooterSection(params) {
    return(
        <div className='footerSection'>
            <div className="contentContainer">
                <div className="leftFooter"></div>
                <div className="rightFooter">
                    <h2>../Contact me</h2>
                    <form action="">
                        <input type="text" 
                            placeholder="Email" 
                            className="inputField"
                            
                        />
                        <input type="email" 
                            placeholder="Title" 
                            className="inputField"
                        />
                        <textarea 
                            name='message'
                            rows="4"
                            placeholder="Message"
                            className="inputField emailField"
                        />
                        <br />
                        <input type='submit' className='submitBtn' />
                    </form>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2025</p> 

            </div>
        </div>
    )
}