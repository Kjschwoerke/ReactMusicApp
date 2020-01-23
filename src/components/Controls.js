import React from "react";
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const Controls = () => {
    return(
        <div className = 'allControl'>
        <h2>You have Successfully Logged In!</h2>
        <div className='controlsContainer'>
            
            {/* show if application is online or not */}
            <section className='controls'>
                <h3>Online Mode</h3>
                <p>Is this application connected to the internet?</p>
                <Switch />
            </section>

            {/* adjust the volume of the application */}
            <section className='controls'>
                <h3>Master Volume</h3>
                <p>Over-rides all other volume settings in this application.</p>
                <Slider />
            </section>

            {/* adjust the quality of the sound */}
            <section className='controls'>
                <h3>Select Sound Quality</h3>
                <p>Manually control the quality of the sound if needed due to connection speed.</p>
                <Select>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </section>
            
            </div>
        </div>
    )
}


export default Controls;