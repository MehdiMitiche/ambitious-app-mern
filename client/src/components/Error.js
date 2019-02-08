import React from 'react';

const Error = (props) => {
    return(
        <div>
            {props.errors.map((err , i) => {
                return(
                    <p key = {i}>{err}</p>
                )
            })}
        </div>
    )
}

export default Error