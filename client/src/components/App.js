import React, { Component } from 'react'
import Calendar from './Calendar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return(
      <div>
        <Calendar />
      </div>
    )
  }
}

export default App