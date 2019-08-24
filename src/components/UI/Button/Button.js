import React from 'react';

import './Button.css';

const Button= (props) =>{

    const classes= `button ${props.type}`

    return(
        <button 
            disabled={props.disabled}
            className={classes}
            onClick={props.clicked}
            >{props.children}</button>
    );
}
export default Button;