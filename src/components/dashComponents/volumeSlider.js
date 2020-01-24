export default function RangeSlider() {
    var timeout;
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
  
    const handleChange = (event, newValue) => {
      timeout && clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log('change');
        setValue(newValue);  
      }, 1000);
    };
  
    return (
      <div className={classes.root}>
        <Typography id="range-slider" gutterBottom>
          Temperature range
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </div>
    );
  }