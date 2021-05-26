import React from 'react'
import { user } from '../../data/user.js';

const CONTACT_ACTION = () => {
    const {ADDRESS, PHONE, EMAIL, WEB, Web_url,LINKEDIN_NAME, LINKEDIN,FACEBOOK, TWITTER, GITHUB} = user.CONTACT_INFO
    return (
        <div className='card indigo lighten-2 z-depth-0 mt'>
            <div className='card-content contactInfo'>
                <p className='indigo-text text-darken-4 pt'>
                    <i className='fas fa-map-marker-alt'></i> {ADDRESS} 
                    <br /> 
                    <i className='fas fa-phone'></i> {PHONE}
                    <br />
                    <i className='fas fa-envelope-square'></i> {EMAIL}
                    <br />
                    <i className='fab fa-internet-explorer'></i> <a href={Web_url} target='_blank' class='indigo-text text-darken-4 pt'><u>{WEB}</u></a>
                    <br />
                    <i className='fab fa-linkedin-in'></i> <a href={LINKEDIN} target='_blank' class='indigo-text text-darken-4 pt'><u> {LINKEDIN_NAME}</u></a>
                    <br />
                    {/* <i className='fab fa-facebook-square'></i> {FACEBOOK}
                    <br />
                    <i className='fab fa-twitter-square'></i> {TWITTER}
                    <br />
                    <i className='fab fa-github-square'></i> {GITHUB}
                    <br /> */}
                </p>
            </div>
        </div>
    )
}

export default CONTACT_ACTION
