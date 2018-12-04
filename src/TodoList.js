import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleTodo } from './store/todos'

const mapStateToProps = store => ({
    _todos: store.todos.allTodos
})

const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index))
})

class TodoList extends React.Component {
    state = { value: '' }

    handleInputChange = event => {
        this.setState({ value: event.target.value })

    }

    handleButtonClick = () => {
        console.log('want to save todo:', this.state.value)
        this.props._addTodo(this.state.value)
    }

    handleTodoClick = index => {
        this.props._toggleTodo(index)
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Add todo</button>
                {this.props._todos.map((todo, index) =>
                    <div
                        style={{ textDecoration: todo.completed ? 'underline' : 'none' }}
                        onClick={() => this.handleTodoClick(index)}
                        key={todo.text}>{todo.text}
                    </div>
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)