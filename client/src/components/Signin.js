import React , {Component} from 'react';
import {register} from './userFunctions';
import Error from './Error' ; 
import HeadMsg from './HeadMsg';

//Style the Component
import "./Style.css";

class Signin extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            email : '',
            password : '',
            passwordConf: '',
            err : []
        }
    }

    signin = (event) => {
        event.preventDefault();
        const newUser = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            passwordConf : this.state.passwordConf
        }
        register(newUser).then( (res) => {
            if(res.data.err){
                this.setState({
                    err : res.data.err
                })
                console.log(this.state.err)
            }else{
                this.props.history.push('/login')
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
                    {this.state.err.length >0 ? (<Error errors = {this.state.err} />) : (<HeadMsg headers= "Welcome to our site , Sign In !" msg="fill out the form below to sign-up for a new account." />)}

                    <div className="col l6 offset-l3 s8 offset-s2" id="fromContainer">
                        <div className="row">
                            <form className="col l10 offset-l1 s12" onSubmit = {this.signin}>
                                <div className="row">
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input id="username" type="text" className="validate white-text" onChange = {this.onChange} name="username"/>
                                        <label htmlFor="username" className="white-text">Username</label>
                                    </div>
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input id="email" type="text" className="validate white-text" onChange = {this.onChange} name="email" />
                                        <label htmlFor="email" className="white-text">Email</label>
                                    </div>
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input id="password" type="password" className="validate white-text" onChange = {this.onChange}  name="password"/>
                                        <label htmlFor="password" className="white-text">Password</label>
                                    </div>
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input id="passwordConfirmation" type="password" className="validate white-text" onChange = {this.onChange} name="passwordConf" />
                                        <label htmlFor="passwordConfirmation" className="white-text">Password Confirmation</label>
                                    </div>
                                    <div className="input-field col l12 s8 offset-s2">
                                        <input className="ui inverted button" type="submit" value="SignIn" />
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

export default Signin ;