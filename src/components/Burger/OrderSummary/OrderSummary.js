import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {

    const ingredientskeys = Object.keys(props.ingredients);
    const ingredientsListItem = ingredientskeys.map( (value,i)=>
        <li key={value + i}>
            <p>{value}: {props.ingredients[value]}</p>
        </li>
    );
    


    return (
        <Aux>
            <h3>Your Delicious Burger Order with following ingredients:</h3>

            <ul>
                {ingredientsListItem}
            </ul>


            <p><strong>{props.price}</strong></p>

            <p>Are you ready for shipping?</p>
            <Button type='positive'>YES</Button>
            <Button
                type='negative'
                clicked={props.cancelBtnClick}
            >wait a moment!</Button>

        </Aux>
    );
}
export default OrderSummary;