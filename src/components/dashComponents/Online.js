import React from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//Card imports
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const Online = (props) =>{
  return (
    <Card className="controls">
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          Online Status
        </Typography>
        <Typography variant="h5" component="h2">
          Is online?
        </Typography>
      </CardContent>
      <CardActions>
      <FormControlLabel value="Online" control={<Switch onChange = {props.logged} color="primary" />} label="offline" labelPlacement="start"/>
      </CardActions>
    </Card>
  );
  }
  export default Online