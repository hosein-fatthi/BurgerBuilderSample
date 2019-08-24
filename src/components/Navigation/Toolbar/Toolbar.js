import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle';

import './Toolbar.css';

const Toolbar = (props) => {
    return (
        <header id='header'>
            <SideDrawerToggle 
                menuIconClick={props.iconClick}
            />
            <Logo />
            <NavigationItems />
        </header>
    );
}
export default Toolbar;