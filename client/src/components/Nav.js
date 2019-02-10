import React , {Component} from 'react';
import {Link ,withRouter} from 'react-router-dom'

class Nav extends Component{

    logout = () =>{
        localStorage.removeItem('userToken');
        this.props.history.push('/')
    }

    render(){
        const loginNav = (
            <div>
                <li><Link to="/" className="black-text">Home</Link></li>
                <li><Link to="/signin" className="black-text">Sign Up</Link></li>
                <li><Link to="/login" className="black-text">Login</Link></li>
            </div>
        )

        const logoutNav = (
            <div>
                <li><Link to="/" className="black-text">home</Link></li>
                <li><Link to="/profile" className="black-text">Profile</Link></li>
                <li><button className="waves-effect waves-light btn" onClick={this.logout}>Button</button></li>
            </div>
        )

        return(
            <div>
                <nav>
                    <div className="nav-wrapper white">
                        <Link to="#" className="brand-logo center black-text">Ambitious</Link>
                        <Link to="#" data-target="nav-mobile" className="sidenav-trigger black-text"><i className="material-icons">menu</i></Link>
                        <ul className="left hide-on-med-and-down">
                            {localStorage.userToken ? logoutNav : loginNav}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="nav-mobile">
                    {localStorage.userToken ? logoutNav : loginNav}
                </ul>
            </div>   
        )
    }
}

export default withRouter(Nav) ; 