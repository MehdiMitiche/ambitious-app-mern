import React , {Component} from 'react';

class Signin extends Component {

    signin = (event) => {
        event.preventDefault();
        this.props.history.push('/login')
    }

    render(){
        return(
            <div>
                <h1>Signin</h1>
                <div className="row">
                        <form className="col l4" onSubmit = {this.signin}>
                            <input
                                placeholder="User Name"
                                type="text"
                            />
                            <input
                                placeholder="Email"
                                type="text"
                            />
                            <input
                                placeholder="Password"
                                type="text"
                            />
                            <input
                                placeholder="Password Confirmation"
                                type="text"
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

export default Signin ;