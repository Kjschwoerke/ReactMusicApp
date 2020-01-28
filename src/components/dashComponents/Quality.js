import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [quality, setQuality] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setQuality(event.target.value);
    console.log(`handleChange: ${quality}`)
  };

  const handleClose = () => {
    setOpen(false);
    console.log(`handleClose: ${quality}`)
  };

  const handleOpen = () => {
    setOpen(true);
    console.log(`handleOpen: ${quality}`)
  };
  
  if (quality === 1){
    return (
        <Card className='controls'>
            <CardContent>
          <h3 className={classes.button} onClick={handleOpen}>
            Quality
          </h3>
          <Typography id="discrete-slider" gutterBottom>
              This will adjust the audio quality.
          </Typography>
          <CardActions>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Quality</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={quality}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
            </Select>
          </FormControl>
          </CardActions>
          <p>Music quality is degraded. Increase quality if your connection allows it.</p>
          </CardContent>
        </Card>
      );
  }else{
    return (
            <Card className='controls'>
                <CardContent>
              <h3 className={classes.button} onClick={handleOpen}>
                Quality
              </h3>
              <Typography id="discrete-slider" gutterBottom>
                  This will adjust the audio quality.
              </Typography>
              <CardActions>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Quality</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={quality}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
              </CardActions>
              </CardContent>
            </Card>
      );
  }
  
}