import React, { Component } from 'react'
import AppBar from './components/AppBar'
import Button from '@material-ui/core/Button'
import LogIn from './components/LogIn'
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

    //conditional return based on logged in status
    if (this.state.loggedIn) {
      return (
      <>
      <AppBar />
      <br/>
      <div className = 'dashboardContainer'>
      <LogIn />
      <Button variant="contained" color="primary" onClick = {this.logged}>
                Log-In
      </Button>
      </div>
      </>)

    } else {

      return (
        <>
        <AppBar />
        <br/>
        <Controls />
        </>
      )
    }
  }

}

export default App
