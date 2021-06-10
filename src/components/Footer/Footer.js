import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '36px 32px',
    backgroundColor: '#4b37a5',
    color: 'white'
  }
}));

const Footer = () => {
  const classes= useStyles();
  return (
    <div className={classes.container}>
      <Box>
        <Typography>amazon academy</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>Need Help ?</Typography>
        <Button variant="contained" color="primary">Contact Us</Button>
      </Box>
    </div>
  )
}

export default Footer;
