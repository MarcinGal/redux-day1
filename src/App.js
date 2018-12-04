import React, { Component } from 'react'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return <TodoList todos={[
    {text: 'First Todo from App'},
    {text: 'Second Todo from App'}
    ]}
      />
}
}

export default App
