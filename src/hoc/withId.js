import React from 'react';
const withId= (props) =>{
    return(
        <div id={props.id}>
            {props.children}
        </div>
    );
}
export default withId;