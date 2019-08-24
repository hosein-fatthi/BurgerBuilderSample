import React from 'react';

import WithClass from '../../../../hoc/withClass';
import './BuildControl.css';
import Button from '../../../UI/Button/Button';

const BuildControl = (props) => {

    let disabled = false;
    if(!props.amount){
        disabled = true;
    }

    return (
        <WithClass class='buildControl'>
            <label>{props.label}</label>
            <Button
                disabled={props.disableAllButtons}
                type='positive'
                clicked={(e) => props.click(e, props.label, 'more')}
            >
                More
        </Button>
            <Button
                disabled={disabled || props.disableAllButtons}
                type='negative'
                clicked={(e) => props.click(e, props.label, 'less')}
            >
                Less
            </Button>
        </WithClass>
    );
}
export default BuildControl;