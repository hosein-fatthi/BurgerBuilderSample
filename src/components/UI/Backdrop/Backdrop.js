import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div
            className={props.show ? 'backdrop' : ''}
            onClick={props.cancelModalClick}
            >

        </div>
    );
}
export default Backdrop;
