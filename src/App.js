import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showclock: true}

  onToggleClock = () => {
    this.setState(prevState => {
      const {showclock} = prevState
      return {
        showclock: !showclock,
      }
    })
  }

  render() {
    const {showclock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {/* Hide Clock */}
          {showclock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showclock && <Clock date="08-11-2022" />}
      </div>
    )
  }
}

export default App
