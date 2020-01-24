import React from "react";
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Online from "./dashComponents/Online";
import Volume from "./dashComponents/Volume"

 
    
class Controls extends React.Component {
    render() {
        return(
            <div className = 'controlPanel'>
                <Online />
               <Volume />
            </div>
        )
    }
}

        

            

            {/* adjust the quality of the sound */}
            {/* <section className='controls'>
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
            </section> */}
            
           
        
    
 

export default Controls;