import React from 'react';
import './SocialMediaLogin.css';

import googleLogo from '../../assets/Google__Logo.png';
import facebookLogo from '../../assets/facebook-logo.png';
import twitterLogo from '../../assets/Twitter-logo.png';

const SocialMediaLogin = () => {
    return (
        <div className='socialMediaIcons'>
            <a href="#"><img src={googleLogo} alt="" width="30" height="30" /></a>
            <a href="#"><img src={facebookLogo} alt="" width="30" height="30" /></a>
            <a href="#"><img src={twitterLogo} alt="" width="30" height="30" /></a>
        </div>
    );
};

export default SocialMediaLogin;