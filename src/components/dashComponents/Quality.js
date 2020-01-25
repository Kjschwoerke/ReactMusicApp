import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


export default function Sliders() {
    return(
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
    )
}