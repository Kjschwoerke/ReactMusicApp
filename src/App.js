import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Button from '@material-ui/core/Button'
import Dashboard from './components/Dashboard'
import Controls from './components/Controls'
import './App.css';


class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: true
      }
    }

    logged = (e) => {
        this.setState({
          loggedIn: false
        })
      console.log(this.state.loggedIn)
    }

  render() {
    if (this.state.loggedIn) {
      return (
      <>
      <NavBar />
      <br/>
      <div className = 'dashboardContainer'>
      <Dashboard />
      <Button variant="contained" color="primary" onClick = {this.logged}>
                Log-In
      </Button>
      </div>
      </>)

    } else {

      return (
        <>
        <NavBar />
        <br/>
        <Controls />
        </>
      )
    }
  }

}

export default App
