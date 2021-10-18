import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        content: ''
    };

    // whenever this chnages it updates state
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    // prevent default action of a form and submit todo to the DOM
    handleSubmit = (e) => {
        e.preventDefault();
        // calls the addToDo function which we can access as props from app.js
        this.props.addToDo(this.state)
        // reset field after user submits
        this.setState({
            content: ''
        });
    };

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Todo</label>
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        /* empties field */
                        value={this.state.content} 
                    />
                </form>
            </div>
        )
    };
}

export default AddForm
