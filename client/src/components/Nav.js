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
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/signin" >Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </div>
        )

        const logoutNav = (
            <div>
                <li><Link to="/" >home</Link></li>
                <li><Link to="/profile" >Profile</Link></li>
                <li><Link to="/todos" >Todos</Link></li>
                <li><button className="waves-effect waves-light btn" onClick={this.logout}>Button</button></li>
            </div>
        )

        return(
            <div>
                <nav>
                    <div className="nav-wrapper black">
                        <Link to="#" className="brand-logo center ">Ambitious</Link>
                        <Link to="#" data-target="nav-mobile" className="sidenav-trigger "><i className="material-icons">menu</i></Link>
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