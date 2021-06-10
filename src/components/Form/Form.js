import React from 'react';
import {Grid,Paper,Radio, TextField, Typography, FormControlLabel, Box, Checkbox} from '@material-ui/core'

import Icon from '../../assets/logo.png'

import useStyles from './styles';

const Form = () => {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item lg={6}>
          <Box className={classes.content}>
            <Typography className={classes.title}>
              Schedule a free counselling session
            </Typography>
            <Typography className={classes.desc}>
              Resolve all your queries and learn how Amazon Academy can help you prepare better
            </Typography>
            <Box className={classes.item}>
                  <Box>
                    <img className={ classes.img}src={Icon} alt='icon'/>
                  </Box>
                  <Box>
                    <Typography className={classes.heading}>Engaging and Interactive Lessons</Typography>
                    <Typography className={classes.text}>Learn from experienced JEE faculty to improve understanding and retention of concepts</Typography>
                  </Box>
            </Box>
            <Box className={classes.item}>
              <Box>
                <img className={ classes.img}src={Icon} alt='icon'/>
              </Box>
              <Box>
               <Typography className={classes.heading}>Engaging and Interactive Lessons</Typography>
                <Typography className={classes.text}>Learn from experienced JEE faculty to improve understanding and retention of concepts</Typography>
              </Box>
            </Box>
          </Box>
          
        </Grid>
        <Grid item lg={4} className={classes.formContainer}>
          <Paper className={classes.paper} elevation={5}>
            <form>
              <Typography className={classes.input}>Student's Name<span className={classes.required}>*</span></Typography>
              <TextField variant="outlined" fullWidth placeholder="Name"/>

              <Typography className={classes.input}>Student's Class<span className={classes.required}>*</span></Typography>
              <Box className={classes.radio}>
                <Radio /><Typography>10th</Typography>
                <Radio /><Typography>11th</Typography>
                <Radio /><Typography>12th</Typography>
              </Box>

              <Typography className={classes.input}>Parent's Name<span className={classes.required}>*</span></Typography>
              <TextField variant="outlined" fullWidth placeholder="Name"/>

              <Typography className={classes.input}>Email ID<span className={classes.required}>*</span></Typography>
              <TextField variant="outlined" fullWidth placeholder="Email"/>

              <Typography className={classes.input}>Parent's Phone Number<span className={classes.required}>*</span></Typography>
              <TextField variant="outlined" fullWidth placeholder="Number"/>

              <Typography className={classes.input}>Preferred Language of Counselling</Typography>
              <Box className={classes.radio}>
                <Radio /><Typography>English</Typography>
                <Radio /><Typography>Hindi</Typography>
              </Box>

              <FormControlLabel className={classes.input} control={<Checkbox />} label="By proceeding, I agree to Amazon Academy Free Counselling Terms and 
              Conditions"></FormControlLabel>
            </form>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}

export default Form;
