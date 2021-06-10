import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar:{
    backgroundColor: '#fef9ff',
    color: 'black',
    height: '11.5vh',
  },
  toolbar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon:{
    margin: 0,
    [theme.breakpoints.up('sm')]:{
      display: 'none'
    }
  },
  title:{
    padding: theme.spacing(3),
    fontSize: 28,
    fontWeight: 'bolder',
    color: '#4b37a5',
    // margin: 'auto',
    [theme.breakpoints.down('md')]:{
      padding:theme.spacing(1),
      fontSize: 18
    }
  },
  btnContainer:{
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]:{
      padding: 0,
      margin: 0
    }
  },
  btn1:{
    marginRight: theme.spacing(2),
    padding:theme.spacing(1),
    borderRadius: '6px',
    backgroundColor: '#4b37a5',
    textTransform: 'capitalize',
    fontSize: '16px',
    [theme.breakpoints.down('md')]:{
      fontSize: 14,
      width: 150,
      // padding: 0,
      margin: 0
    }
  },
  btn2:{
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: '6px',
    backgroundColor: '#e7e7ff',
    textTransform: 'capitalize',
    fontSize: '16px',
    color: '#4b37a5',
    width: 80,
    [theme.breakpoints.down('md')]:{
      display: 'none'
    }
  },
  drawer:{
    width: 180
  }
}));