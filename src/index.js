import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore } from 'redux'


const rootReducer = combineReducers({})
const store = createStore(rootReducer)

ReactDOM.render(<App />, document.getElementById('root'));


