import React , {Component} from 'react';
import {Link ,withRouter} from 'react-router-dom'

class Nav extends Component{

    logout = () =>{
        localStorage.removeItem('userToken');
        this.props.history.push('/')
    }

    render(){

        const loginNav = (
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

        const logoutNav = (
            <nav className="grey darken-4">
                <div className="nav-wrapper">
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                    <ul className="right">
                        <li><button className="aves-effect waves-light btn" onClick={this.logout}>LogOut</button></li>
                    </ul>
                </div>
            </nav>
        )

 
        return(
            <div>
                {localStorage.userToken ? logoutNav : loginNav}
            </div>
   
        )
    }
}

export default withRouter(Nav) ; 