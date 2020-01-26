import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

//Card imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';




const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Sliders() {
  const [value, setValue] = useState(20)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
console.log(value)

if (value < 80){
    return (
        <Card className='controls'>
          <CardContent>
            <h3>Master Volume</h3>
            <Typography id="discrete-slider" gutterBottom>
              This will override all other volume settings
            </Typography>
            <CardActions>
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
            </CardActions>
            </CardContent>
        </Card>
      );
    } else if (value === 80 || value > 80) {
    return (
          <Card className='controls'>
          <CardContent>
            <h3>Master Volume</h3>
            <Typography id="discrete-slider" gutterBottom>
              This will override all other volume settings
            </Typography>
            <CardActions>
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
            </CardActions>
            <p>
              <h4>Listening to volumes of 80 or higher may result in hearing damage!</h4>
            </p>
            </CardContent>
        </Card>
      );
    }
  
}
