import React,{Component} from 'react';
import axios from 'axios';

class Profile extends Component {

    constructor(){
        super();
        this.state= {
            email : '',
            username : '',
            msg : ''
        }
    }

    componentDidMount(){
        
        
        if(localStorage.userToken){
            console.log('heey')
            console.log(localStorage.userToken)
            axios
            .get('http://localhost:8080/user/',{headers : {'x-access-token' : localStorage.userToken}})
            .then((res) =>{
                if(res.data.err){
                    this.setState({
                        msg : 'U need To Log In'
                    })
                    setTimeout( () => {
                        this.props.history.push('/login')
                    } ,2000)
                }else{
                    this.setState({
                        email : res.data.user[0].email,
                        username : res.data.user[0].username
                    })
                }
            })
        }else{
            this.setState({
                msg : 'U need To Log In'
            })
            setTimeout( () => {
                this.props.history.push('/login')
            } ,2000)
        }
    }

    render(){
        return(
            <div>
                <h1>Profile</h1>
                <h3>{this.state.msg}</h3>
                <h3>{this.state.email}</h3>
                <h3>{this.state.username}</h3>
            </div>
        )
    }
}

export default Profile ;