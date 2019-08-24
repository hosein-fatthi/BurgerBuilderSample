import React, { Component } from 'react';


import WithClass from '../withClass'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';

import './Layout.css';


/**
 * overall layout component of site
 */
class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    /**
     * method for menu icon handler in mobile size
     */
    sideDrawerHandler = ()=>{
        this.setState( (prevState , props)=>{
            return {
                showSidedrawer : !prevState.showSidedrawer
            }
        }  );       
    }


    render = () => {
        return (
            <WithClass class='layout'>
                <SideDrawer 
                    show={this.state.showSidedrawer}
                    menuIconClick={this.sideDrawerHandler}
                />
                <Toolbar 
                    show={this.state.showSidedrawer}
                    iconClick={this.sideDrawerHandler}
                />
                <main
                    className='mainContent' >
                    {this.props.children}
                </main>
                <Footer />
            </WithClass>
        );
    }
}

export default Layout;