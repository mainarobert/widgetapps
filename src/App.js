import React, { Component } from 'react'
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: [
      {id: 1, content: "buy milk"},
      {id: 2, content: "play video games"}
    ]
  };

  render() {
    return (
      <div>
        <h1 className="center blue-text">To Do</h1>
        <TodoList todo={this.state.todo}/>
      </div>
    )
  }
}

export default App
