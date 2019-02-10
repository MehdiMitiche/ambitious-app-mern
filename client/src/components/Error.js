import React from 'react';

const Error = (props) => {
    return(
        <div className="container">
            {props.errors.map((err , i) => {
                return(
                    <div className="ui warning message" key = {i}>{err}</div>
               )
            })}
        </div>
    )
}

export default Error