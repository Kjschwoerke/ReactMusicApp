import React from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//Card imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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



class Online extends React.Component {
      constructor(props) {
          super(props)
          this.state = {
            online: true
          }
        }
    
        logged = (e) => {
            if(this.state.online === true)
            this.setState({
              online: false
            }) 
            if (this.state.online === false){
              this.setState({
                  online: true
              })
            }
          console.log(this.state.online)
        }

        
render() {
  
 if (this.state.online === true){
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
      <FormControlLabel
                    value="Online"
                    control={<Switch onChange = {this.logged} color="primary" checked = 'true' />}
                    label="Online"
                    labelPlacement="end"
                    />
      </CardActions>
    </Card>
  );

 } else {

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
      <FormControlLabel
                    value="Online"
                    control={<Switch onChange = {this.logged} color="default" />}
                    label="Online"
                    labelPlacement="end"
                    />
      </CardActions>
      <Typography variant="p" component="h4">
      You are not Logged In.  Some features may be unavailable.
        </Typography>
    </Card>
  );
 }
  

// class Online extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           online: true
//         }
//       }
  
//       logged = (e) => {
//           if(this.state.online === true)
//           this.setState({
//             online: false
//           }) 
//           if (this.state.online === false){
//             this.setState({
//                 online: true
//             })
//           }
//         //console.log(this.state.online)
//       }


}

  //   render(){
  //       if (this.state.online === true) {
  //           return(
  //               <section className='controls'>
  //                   <h3>Online Mode</h3>
  //                   <p>Is this application connected to the internet?</p>
  //                   <FormControlLabel
  //                   value="Online"
  //                   control={<Switch onChange = {this.logged} color="primary" checked = 'true' />}
  //                   label="Online"
  //                   labelPlacement="end"
  //                   />
  //                   <h4>You have Successfully Logged In!</h4>
  //               </section>
  //           )} else {
  //               return(
  //               <section className='controls'>
  //                   <h3>Online Mode</h3>
  //                   <p>Is this application connected to the internet?</p>
  //                   <FormControlLabel
  //                   value="Online"
  //                   control={<Switch onChange = {this.logged} color="default" />}
  //                   label="Online"
  //                   labelPlacement="end"
  //                   />
  //                   <h4>You are not Logged In.  Some features may be unavailable.</h4>
  //               </section>
  //           )}
  //  }
  }

  export default Online