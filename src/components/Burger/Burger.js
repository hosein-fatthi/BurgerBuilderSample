import React from 'react';

import BurgerIngridient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {

    let arrayOfIngredients = [];

    
    const mapfunction = (i, name) => {
        arrayOfIngredients.push(
            <BurgerIngridient key={name + i} type={name} />
        )
        return null;
    };

    for (const name in props.ingredients) {
        const number = props.ingredients[name];
        if (number !== 0) {
            [...Array(number)].map((value,i,arr)=>mapfunction(i , name));
        }        
    }
    if (arrayOfIngredients.length === 0) {
        arrayOfIngredients = 'Please add Ingredient!';
    }
    return (
        <div className='burger'>
            <BurgerIngridient type='breadTop' />
            {arrayOfIngredients}
            <BurgerIngridient type='breadBottom' />
        </div>
    );
}
export default burger;