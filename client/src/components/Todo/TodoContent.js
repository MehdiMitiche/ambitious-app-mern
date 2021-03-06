import React , {Component} from 'react';

class TodoContent extends Component{



    render(){

        return(
            <div className="row">
                {this.props.todos.map((todo , i) =>{
                    return(
                        <div className="col l4 m6 s12" key={i}>
                            <div className="ui cards" id="todoCard">
                                <div className="ui fluid card">
                                    <div className="content">
                                        <i className="right floated like icon"></i>
                                        <i class="right floated star icon"></i>
                                        <div className="header">
                                            {todo.title}
                                        </div>
                                        <div className="meta">
                                            {todo.author}
                                        </div>
                                        <div className="description truncate">
                                            {todo.description}
                                        </div>
                                    </div>


                                    <div className="extra content grey darken-4">
                                        <span className="left floated like">
                                            <i className="like icon"></i>
                                            <span className="white-text">Like</span>
                                        </span>
                                        <span className="left floated like">
                                            <i className="star icon"></i>
                                            <span className="white-text">Favorite</span>
                                        </span>
                                        <span className="right floated like">
                                            <i className="star icon"></i>
                                            <span className="white-text">Delete</span>
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoContent;