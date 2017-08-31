import React from 'react';

const ErrorAlert = (props) => {
    return(
        <div className="Error">
            {props.children}
        </div>
    )
}
export default ErrorAlert;