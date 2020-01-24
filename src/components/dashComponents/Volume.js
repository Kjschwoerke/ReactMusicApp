import React, { useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles({
//   root: {
//     width: 700,
//     top: '20%',
//     left: '50%',
//     position: 'absolute',
//     transform: 'translate(-50%, -50%)',
//   }
// });

export default function Sliders() {
  //const classes = useStyles();
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
            {/* <Typography id="font" style={{ fontSize: value }}>
              Font size {value}
            </Typography> */}
        </section>
      );
    } else if (value == 80 || value > 80) {
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



// import React from 'react'
// import Slider from '@material-ui/core/Slider';


//  class Volume extends React.Component {
     
//     render(){
//             return (
//                 <section className='controls'>
//                     <h3>Master Volume</h3>
//                     <p>Listening at volumes over 80 may cause hearing damage!</p>
//                     <Slider 
//                     getAriaValueText = {this.getVolume}
//                     valueLabelDisplay="auto"
//                     defaultValue = {30}
//                     step={10}
//                     marks
//                     min = {0}
//                     max = {110} />
//                 </section>
//             ) 
//     }
//  }  

//   export default Volume