import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoList from './TodoList'

const mapStateToProps = (state) => ({

})

class App extends Component {
  render() {
    return <TodoList todos={[
    {text: 'First Todo from App'},
    {text: 'Second Todo from App'}
    ]}
      />
}
}

export default connect(mapStateToProps)(App)
