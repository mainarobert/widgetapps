import React, { Component } from 'react'
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todo: [
      {id: 1, content: "buy milk"},
      {id: 2, content: "play video games"}
    ]
  };
  // function to delete todo items is here because it has to interact with 
  // takes id as parameter so that we can be able to look and and filter from todo array
  deleteToDo = (id) => {
    const todos = this.state.todo.filter(todo => {
      // if todo.id is not eaqual to id param (deleteToDo) return true. If they are equal return false and remove that from the array
      return todo.id !== id
    });
    this.setState({
      todo: todos 
    });
  }
  // we then pass the function as a prop to todo component so that we can call it when we click on an individual todo 

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">To Do</h1>
        <TodoList 
          todo={this.state.todo}
          deleteToDo={this.deleteToDo}
        />
      </div>
    )
  }
}

export default App
