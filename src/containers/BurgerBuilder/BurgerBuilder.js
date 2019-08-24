import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


class BurgerBuilder extends Component {

    static INGREDIENTS_PRICE = {
        salad: 0.4,
        meat: 1.5,
        cheese: 0.8,
        bacon: 1
    }
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totallPrice: 5,
        purchasing: false
    }


    componentDidUpdate = () => {

        let jsonState = JSON.stringify(this.state);
        console.log(jsonState);

        localStorage.setItem('state', jsonState);
    }

    componentDidMount = () => {
        this.setState(JSON.parse(localStorage.getItem('state')));

    }

    purchaseHandler = () => {
        this.setState((prevState, props) => {
            return {
                purchasing: !prevState.purchasing
            }
        });
    }

    changeIngredient = (e, name, action) => {


        this.setState((prevState, props) => {
            let newState = { ...prevState }
            if (action === 'more') {
                newState.ingredients[name] += 1;
                newState.totallPrice += BurgerBuilder.INGREDIENTS_PRICE[name];
            } else if (action === 'less') {
                newState.ingredients[name] -= 1;
                newState.totallPrice -= BurgerBuilder.INGREDIENTS_PRICE[name];
            }

            return newState;
        })
    }

    render() {
        return (
            <Aux>
                <Modal
                    cancelModalClick={this.purchaseHandler}
                    show={this.state.purchasing}
                >
                    <OrderSummary
                        price={this.state.totallPrice.toFixed(2)}
                        cancelBtnClick={this.purchaseHandler}
                        ingredients={this.state.ingredients}
                    />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totallPrice}
                    ingredients={this.state.ingredients}
                    click={this.changeIngredient}
                    orderBtnClick={this.purchaseHandler}
                    disableAllButtons={this.state.purchasing}
                />
            </Aux>
        );

    }

}

export default BurgerBuilder;
