import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleTodo, deleteTodo, filterTodos } from './store/todos'
import './todo.css'

const mapStateToProps = store => ({
    _todos: store.todos.visibleTodos
})

const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index)),
    _filterTodos: text => dispatch(filterTodos(text))
})

class TodoList extends React.Component {
    state = {
        value: '',
        filterValue: ''
    }

    handleInputChange = event => {
        this.setState({ value: event.target.value })
    }

    handleFilterChange = event => {
        this.setState({ filterValue: event.target.value })
    }

    handleButtonClick = () => {
        console.log('want to save todo:', this.state.value)
        this.props._addTodo(this.state.value)
    }

    handleTodoClick = index => {
        this.props._toggleTodo(index)
    }

    handleDeleteClick = index => {
        this.props._deleteTodo(index)
    }

    handleFilterClick = () => {
        this.props._filterTodos(this.state.filterValue)
    }

    renderInput() {
        return <div
            className={'menu'}
        >
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}>Add todo</button>
        </div>
    }

    renderFilter() {
        return <div>
            <input onChange={this.handleFilterChange} />
            <button onClick={this.handleFilterClick} >Filter</button>
        </div>
    }

    renderList() {
        return this.props._todos.map((todo, index) =>
            <div
                className={'divList'}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => this.handleTodoClick(index)}
                key={todo.text}>
                <div
                    className={'listItem'}
                >{todo.text}
                    <button
                        className={'deleteItemButton'}
                        onClick={() => this.handleDeleteClick(index)}>X</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderInput()}
                {this.renderFilter()}
                {this.renderList()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)