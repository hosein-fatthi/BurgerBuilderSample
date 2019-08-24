import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.css';
/**
 * showing the ingridients based on type entered
 * @param type props for type of ingredient to show 
 */
class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'breadBottom' ):
                ingredient = <div className='breadBottom'></div>;
                break;
            case ( 'breadTop' ):
                ingredient = (
                    <div className='breadTop'>
                        <div className='seeds1'></div>
                        <div className='seeds2'></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className='meat'></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className='cheese'></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className='bacon'></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className='salad'></div>;
                break;
            default:
                ingredient = null;
        }
        
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient; 