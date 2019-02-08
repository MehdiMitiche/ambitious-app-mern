import React,{Component} from 'react';

class Profile extends Component {

    componentDidMount(){
        if(localStorage.getItem('userToken')){
            console.log('Logged in')
        }else{
            console.log('U need To log in')
        }
    }

    render(){
        return(
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}

export default Profile ;