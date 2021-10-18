import React from 'react'

const TodoList = ({ todo }) => {

    // we need to map because we are getting a list and return jsx for each item
    // terniary operator to return items or text if empty
    const todos = todo.length ? (todo.map(items => {
        return (
            // react expects a unique key on every surrounding element that we return inside map function for easy DOM manipulation
            <div key={items.id} className="collection-item">
                <span>{items.content}</span>
            </div>
        )
    })) : (<p className="center">you have no tasks left!</p>)

    return (
        <div className="todolist collection">
            {todos}
        </div>
    )
}

export default TodoList;