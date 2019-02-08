import React , {Component} from 'react';
//import axios from 'axios';
import {register} from './userFunctions';
import Error from './Error' ; 

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
            <div>
                <h1>Signin</h1>
                <Error errors = {this.state.err} />
                <div className="row">
                        <form className="col l4" onSubmit = {this.signin}>
                            <input
                                name="username"
                                placeholder="User Name"
                                type="text"
                                onChange = {this.onChange}
                            />
                            <input
                                name="email"
                                placeholder="Email"
                                type="text"
                                onChange = {this.onChange}
                            />
                            <input
                                name="password"
                                placeholder="Password"
                                type="text"
                                onChange = {this.onChange}
                            />
                            <input
                                name="passwordConf"
                                placeholder="Password Confirmation"
                                type="text"
                                onChange = {this.onChange}
                            />
                            <input
                                value="Sign In"
                                type="submit"
                            />
                        </form>
                    </div>
                    <p>{this.state.username}</p>
                    <p>{this.state.email}</p>
                    <p>{this.state.password}</p>
                    <p>{this.state.passwordConf}</p>
            </div>
        )
    }


}

export default Signin ;