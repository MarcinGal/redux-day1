import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//REDUX IMPORTS
import { combineReducers, createStore } from 'redux'
import todos from './store'

//REDUX GO HERE
const rootReducer = combineReducers({
    todos
})

const store = createStore(rootReducer)

ReactDOM.render(<App />, document.getElementById('root'));


