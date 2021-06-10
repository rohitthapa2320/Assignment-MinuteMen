import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    padding: theme.spacing(4),
    backgroundColor: 'white',
    width: '100%',
    marginTop: '11.5vh',
  },
  content:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
    padding: 16
  },
  inner:{
    // marginLeft: 48
  },
  title:{
    fontSize: 32,
    fontWeight: 'bolder',
    marginTop: 60,
    [theme.breakpoints.down('md')]:{
      fontSize: 20
    }
  },
  desc:{
    margin: '30px 0',
    [theme.breakpoints.down('md')]:{
      fontSize: 16
    }
  },
  image:{
    width: '80%',
    height: '80%',
  },
  item:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2)
    // margin: 20,
  },
  img:{
    width: 80,
    height: 60,
    marginRight: 40,
    [theme.breakpoints.down('md')]:{
      // display: 'none'
      width: 30,
    height: 25,
    marginRight: 20
    }
  },
  heading:{
    fontSize: 24,
    // fontWeight: 'bold',
    [theme.breakpoints.down('md')]:{
      fontSize: 16
    }
  },
  text:{
    fontSize: 16,
    // fontWeight: 'lighter',
    [theme.breakpoints.down('md')]:{
      fontSize: 10
    }
  }
}));

export default useStyles;