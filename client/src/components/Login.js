import React,{Component} from 'react';
import {login} from './userFunctions';
import Error from './Error';
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
            if(res.data.err){
                console.log(res.data.err)
                this.setState({
                    err : res.data.err
                })
            }else{
                localStorage.setItem('userToken' , res.data)
                this.props.history.push('/')
                console.log(res.data)
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
                <h1>Login</h1>
                <Error errors = {this.state.err} />
                <div className="row">
                    <form className="col l4" onSubmit = {this.login}>
                        <input
                         name="username"
                         placeholder="User Name"
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
                         value="Sign In"
                         type="submit"
                        />
                    </form>
                </div>


            </div>
        )
    }
}

export default Login ;