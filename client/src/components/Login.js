import React,{Component} from 'react';
import {login} from './userFunctions';
import Error from './Error';
import HeadMsg from './HeadMsg';

//Style The components
import './Style.css';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            password : '',
            err : []
        }
    }

    login = (event) => {
        event.preventDefault();
        const user = {
            username : this.state.username,
            password : this.state.password
        }
        login(user).then( (res) => {
            console.log(res);
            if(res.data.err){
                console.log('Err')
                console.log(res.data.err)
                this.setState({
                    err : res.data.err
                })
            }else{
                localStorage.setItem('userToken' , res.data)
                this.props.history.push('/')
            }

        })
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
        <div className="body">
            <div className="row container">
                    <br />
                    {this.state.err.length >0 ? (<Error errors = {this.state.err} />) : (<HeadMsg headers= " Login !" msg="fill out the form below to Login to your account." />)}
                    <div className="col l6 offset-l3 s8 offset-s2" id="fromContainer">
                        <div className="row">
                            <form className="col l10 offset-l1 s12" onSubmit = {this.login}>
                                <div className="row">
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input id="username" type="text" className="validate white-text" onChange = {this.onChange} name="username" />
                                        <label htmlFor="username" className="white-text">Username</label>
                                    </div>
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input id="password" type="password" className="validate white-text" onChange = {this.onChange} name="password" />
                                        <label htmlFor="password" className="white-text">Password</label>
                                    </div>
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input className="ui inverted button" type="submit" value="Login" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Login ;