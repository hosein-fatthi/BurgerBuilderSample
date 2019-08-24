import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import WithId from '../../../hoc/withId';
import Button from '../../UI/Button/Button';

import './BuildControls.css';


const BuildControls = (props) => {


    const isOrderable = () => {
        for (const key in props.ingredients) {
            const element = props.ingredients[key];
            if (element) {
                return true;
            }
        }
        return false;
    };


    const allBuildControl = Object.keys(props.ingredients)
        .map((value, i) => {
            return (
                <BuildControl
                    disableAllButtons={props.disableAllButtons}
                    click={props.click}
                    label={value}
                    key={value + i}
                    amount={props.ingredients[value]}
                />
            )
        })


    return (
        <WithId id="buildControls">
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {allBuildControl}
            <Button
                type='positive'
                disabled={!isOrderable() || props.disableAllButtons}
                clicked={props.orderBtnClick}
                >
                ORDER NOW
            </Button>
        </WithId>
    );
}
export default BuildControls;