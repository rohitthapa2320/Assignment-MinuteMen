import React from 'react';
import {Grid, Box, Typography, Button} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    height: '80.5vh',
    width: '100%',
    marginTop: '11.5vh',
     backgroundImage: `url('https://m.media-amazon.com/images/G/31/academy/images/hero-banner-D-v4._CB668011230_.webp')`
  },
  offer:{
    width: '100%',
    height: '8vh',
    backgroundColor: '#ffce58',
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
      height: '10vh'
    }
  },
  offerText:{
    padding: 15,
    fontWeight: 'bolder',
    fontSize: 16
  },
  leftContainer:{
    margin: theme.spacing(6),
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 56,
    marginTop: 50,
    fontWeight: 'bolder',
    [theme.breakpoints.down('md')]:{
      fontWeight: 'bolder',
      fontSize: 24
    }
  },
  description:{
    fontSize: 24,
    margin: '16px 0px'
  },
  btn1:{
    marginTop: theme.spacing(2),
    padding:theme.spacing(1),
    borderRadius: '6px',
    backgroundColor: '#4b37a5',
    textTransform: 'capitalize',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#fff',
    width: 230,
    height: 60
  }
}));

const Banner = () => {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.offer}>
        <Typography variant="body2" className={classes.offerText}>Launch offer: 40% discount on all JEE study packs. View packs</Typography>
      </Box>
      <Grid container>
        <Grid item lg={6}>
          <Box className={classes.leftContainer}>
            <Box>
              <Typography className={classes.title}>
                Unleash the winning edge in JEE with Amazon Academy
              </Typography>
              <Typography className={classes.description}>Now Offering IIT JEE courses – Class 11 and 12</Typography>
              <Button className={classes.btn1} onClick={() => {}}>Enroll For Free</Button>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Banner;
