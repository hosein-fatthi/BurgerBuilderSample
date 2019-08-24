import React from 'react';
import burgerLogo from '../assets/images/burger-logo.png';

import './Logo.css';

/**
 * component to show the logo in nice way both in toolbar and sideDrawer
 */
const Logo= (props) =>{
    return(
        <div id='logo'>
            <img id='logoImage' src={burgerLogo} alt='myBurger' />
        </div>
    );
}
export default Logo;