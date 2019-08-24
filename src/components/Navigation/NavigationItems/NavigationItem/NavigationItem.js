import React from 'react';

import './NavigationItem.css';


/**
 * component for every nav item
 * @param link props for the href
 * @param active 
 */
const navigationItem= (props) =>{
    return(
        <li className='navigationItem'>
            <a
                href={props.link} 
                className={props.active ? 'active' : null}  
                >{props.children}
            </a>
        </li>
    );
}
export default navigationItem;