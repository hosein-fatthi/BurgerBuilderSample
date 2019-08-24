import React from 'react';

import './SideDrawer.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) => {


    let classes = null;
    if (props.show) {
        classes = 'open'
    } else {
        classes = 'close'
    }
    classes += ' sideDrawer';
    console.log(props.show);


    return (
        <Aux>
            <Backdrop
                cancelModalClick={props.menuIconClick}
                show={props.show} />
            <div className={classes}>
                <div id='logoContainer'>
                    <Logo />
                </div>
                <NavigationItems active={false} />

            </div>
        </Aux >

    );
}
export default sideDrawer;