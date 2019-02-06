import React , {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
            <nav className="grey darken-4">
                <div className="nav-wrapper">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/signin">signin</Link></li>
                        <li><Link to="/login">login</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav ; 