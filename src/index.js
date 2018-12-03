import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//REDUX IMPORTS
import { combineReducers, createStore } from 'redux'
import todos, { addTodo } from './store'



//REDUX GO HERE
const rootReducer = combineReducers({
    todos
})

const store = createStore(rootReducer)

console.warn(store.getState())

store.dispatch(addTodo('Go shopiing'))

console.warn(store.getState())


ReactDOM.render(<App />, document.getElementById('root'));


