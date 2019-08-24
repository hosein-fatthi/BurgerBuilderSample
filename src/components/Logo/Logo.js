import React from 'react';
import burgerLogo from '../assets/images/burger-logo.png';

import './Logo.css';

const Logo= (props) =>{
    return(
        <div id='logo'>
            <img id='logoImage' src={burgerLogo} alt='myBurger' />
        </div>
    );
}
export default Logo;