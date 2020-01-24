import React from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class Online extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          online: true
        }
      }
  
      logged = (e) => {
          if(this.state.online === true)
          this.setState({
            online: false
          }) 
          if (this.state.online === false){
            this.setState({
                online: true
            })
          }
        //console.log(this.state.online)
      }
    

    render(){
        if (this.state.online === true) {
            return(
                <section className='controls'>
                    <h3>Online Mode</h3>
                    <p>Is this application connected to the internet?</p>
                    <FormControlLabel
                    value="Online"
                    control={<Switch onChange = {this.logged} color="primary" checked = 'true' />}
                    label="Online"
                    labelPlacement="end"
                    />
                    <h4>You have Successfully Logged In!</h4>
                </section>
            )} else {
                return(
                <section className='controls'>
                    <h3>Online Mode</h3>
                    <p>Is this application connected to the internet?</p>
                    <FormControlLabel
                    value="Online"
                    control={<Switch onChange = {this.logged} color="default" />}
                    label="Online"
                    labelPlacement="end"
                    />
                    <h4>You are not Logged In.  Some features may be unavailable.</h4>
                </section>
            )}
   }
  }

  export default Online