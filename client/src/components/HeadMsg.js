import React from 'react';

const HeadMsg = (props) => {
    return(
    <div className="col l6 offset-l3 s8 offset-s2">
        <div className="ui info message ">
            <div className="header">
                {props.headers}
            </div>
            <ul className="list">
                <li>{props.msg}</li>
            </ul>
        </div>
    </div>
    )
}

export default HeadMsg