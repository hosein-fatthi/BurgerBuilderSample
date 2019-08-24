import React, { Component } from 'react';

import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component {


    componentDidUpdate(){
        console.log('{Modal.js} componentDidUpdate');   
    }


    shouldComponentUpdate = (nextProps,nextState)=>{
        
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    cancelModalClick={this.props.cancelModalClick}
                />
                <div
                    id='uiModal'
                    style={{
                        transform: this.props.show ? 'translateY(0)'
                            : 'translateY(-30vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>

            </Aux>

        );
    }
}

export default Modal;