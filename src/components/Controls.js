import Online from "./dashComponents/Online";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Quality from "./dashComponents/Quality";
import { QualityValue } from './dashComponents/Quality'

class Controls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          online: false,
          volume: '',
          quality: '',
          alertArr: [],
        }
}

//Function to change online status and to update the system notification
changeOnline = (isOnline) => {
  if(isOnline === true){
    this.setState({
       online: false,
    })
    let alert = [...this.state.alertArr]
    alert.push("Your application is offline. You won't be able to share or stream music to other devices.")
    this.setState({
        alertArr: alert
    })
  } else if (isOnline === false) {
    this.setState({
        online: true,
    })
    let alert = [...this.state.alertArr]
    alert.push('You are currently online.')
    this.setState({
        alertArr: alert
    })
    //console.log(QualityValue.value + " @controls.js")
  }
}

//Function to change the volume and update system notification
handleChange = (event, newValue) => {
  this.setState({
    volume: newValue,
  })
  

    if (newValue > 80 || newValue === 80){
      //console.log('this is the volume:  '+ newValue)
        let alert = [...this.state.alertArr]
        alert.push('Listening to music at a high volume could cause long-term hearing loss.')
        this.setState({
          alertArr: alert
        })
    }
  };
  
//Function to update the sound quality and update the system notification

    changeQuality = (quality) => {
       console.log(quality)
       if (quality === 1){
        //console.log('this is the volume:  '+ newValue)
          let alert = [...this.state.alertArr]
          alert.push('Music quality is degraded. Increase quality if your connection allows it.')
          this.setState({
            alertArr: alert
          })
      }
     }

    render() {
        return(
            <div className = 'controlPanel'>
{/* Component to modify online status. */}
                <Online logged={this.changeOnline.bind(this, this.state.online)}/>


{/* Component to modify volume status. */}
            <Card className='controls'>
              <CardContent>
                <h3>Master Volume</h3>
                <Typography id="discrete-slider" gutterBottom>
              This will override all other volume settings
                </Typography>
              <CardActions>
                <Slider
                defaultValue={20}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={110}
                onChange={this.handleChange}
                />
              </CardActions>
            </CardContent>
        </Card>

        
{/* Component to modify sound quality status. */}
          <Quality onQualChange={this.changeQuality}/>
{/* System status section to update the system. */}
                <section>
                    <h3>System Notifications:</h3>
                    <p>{this.state.alertArr}</p>
                </section>
            </div>
        )
    }
}

export default Controls;