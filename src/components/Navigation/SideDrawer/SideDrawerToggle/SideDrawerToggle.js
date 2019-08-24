import React from 'react';

import './SideDrawerToggle.css'
import menuIcon from '../../../assets/images/iconfinder.png';

const sideDrawerToggle = (props) => {
    return (
        <img
            src={menuIcon}
            id='menuIcon'
            alt='menu icon'
            onClick={props.menuIconClick}
        />
    );
}
export default sideDrawerToggle;