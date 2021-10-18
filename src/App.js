import React, { Component } from 'react'
import AddForm from './components/AddForm';
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
  // we then pass the function as a prop to todoList component so that we can call it when we click on an individual todo 
  deleteToDo = (id) => {
    const todos = this.state.todo.filter(todo => {
      // if todo.id is not eaqual to id param (deleteToDo) return true. If they are equal return false and remove that from the array
      return todo.id !== id
    });
    this.setState({
      todo: todos 
    });
  }

  // interacts with state and add todo to the todo array & pass it as props to AddForm component
  addToDo = (todoitem) => {
    todoitem.id = Math.random();
    //spread operator to get each item from todo array and dump them into todos array and new array is stored here
    let todos = [...this.state.todo, todoitem];
    this.setState({
      todo: todos
    })
  }

  render() {
    return (
      <div className ="container">
        <h1 className ="center blue-text">To Do</h1>
        <TodoList 
          todo = {this.state.todo}
          deleteToDo = {this.deleteToDo}
        />
        <AddForm addToDo = {this.addToDo}/>
      </div>
    )
  }
}

export default App
