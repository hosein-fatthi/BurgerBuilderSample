import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <nav id='navigationTag'>
            <ul id='navigationItems'>
                <NavigationItem
                    link="/"
                    active>
                    Burger Builder
                </NavigationItem>
                <NavigationItem
                    link="/">
                    checkout
                </NavigationItem>
            </ul>
        </nav>

    );
}
export default navigationItems;