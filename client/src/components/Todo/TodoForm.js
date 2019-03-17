import React , {Component} from 'react';

class TodoForm extends Component{

    render(){
        return(
            <div>
                <div className="row">
                    <form className="col s8 offset-s2" style ={ {backgroundColor: "rgba(0, 0, 0, 0.6)"}} onSubmit={this.props.onSubmit}>
                        <div className="row">
                            <div className="input-field col l4 s12 offset-l2  ">
                                <input type="text" name="title" id="title" className="white-text" onChange={this.props.onChange} />
                                <label htmlFor="title" className="white-text">Title</label>
                            </div>
                            <div className="input-field col l4 s12 ">
                                <input type="text" name="description" id="description" className="white-text" onChange={this.props.onChange}/>
                                <label htmlFor="description" className="white-text">Description</label>
                            </div>
                            <div className="col l2 s6">
                                <input type="submit" value="Submit" className="ui inverted button big" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col l4 offset-l4">
                        <h2 className="center-align">TODOS</h2> 
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default TodoForm;