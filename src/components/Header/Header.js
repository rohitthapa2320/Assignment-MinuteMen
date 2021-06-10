import React, {useState} from 'react';
import {AppBar, Toolbar, Drawer, Typography, List, ListItem,ListItemText, CssBaseline, Button,IconButton} from '@material-ui/core';

import useStyles from './styles';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  const classes= useStyles();
  const [open,setOpen]= useState(false);
  return (
    <div>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Pricing" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="LogIn/SignUp" />
          </ListItem>
        </List>
      </Drawer>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolbar}>
    
          <IconButton className={classes.icon} onClick={() => setOpen(true)}><MenuIcon />  </IconButton>
    
          <Typography className={classes.title}>
            amazon academy 
          </Typography>
          {/* <Divider orientation="vertical" />
          <Typography className={classes.text}>Pricing</Typography> */}
          <div className={classes.btnContainer}>
            <Button className={classes.btn1} variant="contained" color="primary">Enroll For Free</Button>
            <Button className={classes.btn2} variant="contained" color="secondary">Log in</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
