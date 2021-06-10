import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';

import Image from '../../assets/img1.png';
import Icon from '../../assets/logo.png';

import useStyles from './styles';


const Practice = () => {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12} lg={6} >
          <img src={Image} alt="main" className={classes.image}/>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box className={classes.content}>
            <Box className={classes.inner}>
                <Typography className={classes.title} variant="h4">Practice questions from JEE syllabus</Typography>
                <Typography className={classes.desc} variant="h6">
                  Solve high quality JEE level questions with Amazon Academy’s question bank
                </Typography>
                <Box className={classes.item}>
                  <Box>
                    <img className={ classes.img} src={Icon} alt='icon'/>
                  </Box>
                  <Box>
                    <Typography variant="h5" className={classes.heading}>Engaging and Interactive Lessons</Typography>
                    <Typography variant="body1" className={classes.text}>Learn from experienced JEE faculty to improve understanding and retention of concepts</Typography>
                  </Box>
                </Box>
                <Box className={classes.item}>
                  <Box>
                    <img className={ classes.img}src={Icon} alt='icon'/>
                  </Box>
                  <Box>
                  <Typography variant="h5" className={classes.heading}>Engaging and Interactive Lessons</Typography>
                  <Typography variant="body1" className={classes.text}>Learn from experienced JEE faculty to improve understanding and retention of concepts</Typography>
                  </Box>
                </Box>
                <Box className={classes.item}>
                  <Box>
                    <img className={ classes.img}src={Icon} alt='icon'/>
                  </Box>
                  <Box>
                 <Box>
                  <Typography variant="h5" className={classes.heading}>Engaging and Interactive Lessons</Typography>
                  <Typography variant="body1" className={classes.text}>Learn from experienced JEE faculty to improve understanding and retention of concepts</Typography>
                  </Box>
                </Box>
                </Box>
            </Box>
          </Box>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Practice;
