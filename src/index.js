import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//REDUX IMPORTS
import { combineReducers, createStore } from 'redux'
import todos, { addTodo } from './store/toDos'
import counter, { increment, decrement, reset } from './store/counter'
import cart, { addToCart } from './store/cart'



//REDUX GO HERE
const rootReducer = combineReducers({
    counter,
    todos,
    cart
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

// console.warn(store.getState())

store.dispatch(addTodo('Go shoping'))
store.dispatch(addTodo('Some other things'))
store.dispatch(addTodo('Clean the dishes'))
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(addToCart())

window.letIncreaseCounter = () => store.dispatch(increment())
window.justAddTodo = (text) => store.dispatch(addTodo(text))
window.letDecreaseCounter = () => store.dispatch(decrement())
window.addPriceToCart = (price) => store.dispatch(addToCart(price))

// console.warn(store.getState())




ReactDOM.render(<App />, document.getElementById('root'));


