import React, { Component } from 'react'

// import TodoList from './TodoList'
import Counter from './Counter'

class App extends Component {
  render() {
    console.log('App.props', this.props)
    return <Counter />
    // <TodoList />
}
}

export default App
