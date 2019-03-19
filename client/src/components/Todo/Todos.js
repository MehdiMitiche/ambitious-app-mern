import React, {Component} from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

import './Todo.css';


class Todos extends Component{
    constructor(){
        super();
        this.state = {
            username : jwtDecode(localStorage.userToken).username,
            todos : [],
            msg : '',
            title : '',
            description : '',
        }
    }

    //On change Todo form inputs
    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    //On submit Todo Form 
    addTodo = (event) => {
        
        event.preventDefault();
        const newTodo = {
            title : this.state.title,
            description : this.state.description,
            author : this.state.username
        }
        axios.post('http://localhost:8080/todo',newTodo,{headers : {'x-access-token' : localStorage.userToken}})
        .then((res) =>{
            this.setState({
                todos : [...this.state.todos,res.data.todo]
            })
        })
    }

    //Get reaquest to Get Stocked Todos
    componentDidMount(){
        if(localStorage.userToken){
            axios.get('http://localhost:8080/todo/',{headers : {'x-access-token' : localStorage.userToken}})
            .then((res) => {
                if(res.data.err){
                    console.log('err')
                    this.setState({
                        msg : "Tou need To log in"
                    })
                    setTimeout(()=>{
                        this.props.history.push('/login')
                    },2000)
                }else{
                    this.setState({
                        todos : res.data
                    })
                }
            })
        }else{
            this.setState({
                msg : "Tou need To log in"
            })
            setTimeout(()=>{
                this.props.history.push('/login')
            },2000)
        }
    }



    render(){
        return(
            <div>
                <div className="row">
                    <div className="col s12" id="head">
                        <br />
                        <br />
                        <TodoForm
                         onChange={this.onChange}  
                         onSubmit={this.addTodo}  
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col l10 offset-l1">
                        <TodoContent todos={this.state.todos} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Todos;