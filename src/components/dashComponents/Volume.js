import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


export default function Sliders() {
  const [value, setValue] = useState(20)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
console.log(value)

if (value < 80){
    return (
        <section className='controls'>
            <h3>Master Volume</h3>
            <Typography id="discrete-slider" gutterBottom>
              This will override all other volume settings
            </Typography>
            <Slider
              defaultValue={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={110}
              onChange={handleChange}
            />
        </section>
      );
    } else if (value === 80 || value > 80) {
    return (
        <section className='controls'>
            <h3>Master Volume</h3>
            <Typography id="discrete-slider" gutterBottom>
              This will override all other volume settings
            </Typography>
            <Slider
              defaultValue={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={110}
              onChange={handleChange}
            />
            <p>
              <h4>Listening to volumes of 80 or higher may result in hearing damage!</h4>
            </p>
        </section>
      );
    }
  
}
