import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//REDUX IMPORTS
import { combineReducers, createStore } from 'redux'
import todos, { addTodo } from './store/toDos'
import counter, { increment } from './store/counter'



//REDUX GO HERE
const rootReducer = combineReducers({
    counter,
    todos
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

console.warn(store.getState())

store.dispatch(addTodo('Go shoping'))
store.dispatch(addTodo('Some other things'))
store.dispatch(addTodo('Clean the dishes'))
store.dispatch(increment())

console.warn(store.getState())


ReactDOM.render(<App />, document.getElementById('root'));


