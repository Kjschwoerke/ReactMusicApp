import React from "react";
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Controls extends React.Component {

    render(){

//const Controls = () => {
    return(
        <div className = 'allControl'>
        <h2>You have Successfully Logged In!</h2>
        <div className='controlsContainer'>
            
            {/* show if application is online or not */}
            <section className='controls'>
                <h3>Online Mode</h3>
                <p>Is this application connected to the internet?</p>
                <FormControlLabel
                value="Online"
                control={<Switch color="primary" />}
                label="Online"
                labelPlacement="end"
                />
            </section>

            {/* adjust the volume of the application */}
            <section className='controls'>
                <h3>Master Volume</h3>
                <p>Over-rides all other volume settings in this application.</p>
                <Slider 
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}/>
            </section>

            {/* adjust the quality of the sound */}
            <section className='controls'>
                <h3>Select Sound Quality</h3>
                <p>Manually control the quality of the sound if needed due to connection speed.</p>
                <Select>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                </Select>
            </section>
            
            </div>
        </div>
    )
    }
  }

export default Controls;