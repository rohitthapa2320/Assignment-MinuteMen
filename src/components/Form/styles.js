import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    width: '100%',
    marginTop: '11.5vh',
    backgroundColor: '#fff'
  },
  formContainer:{
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.down('md')]:{
      padding: 0
    }
  },
  paper:{
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: 8
  },
  radio:{
    display: 'flex',
    // justifyContent:'center',
    alignItems: 'center'
  },
  input:{
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  required:{
    color: 'red'
  },
  content:{
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  },
  title:{
    fontSize: 32,
    fontWeight: 'bolder',
    marginTop: 60,
    // [theme.breakpoints.down('md')]:{
    //   fontSize: 12
    // }
  },
  desc:{
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18
  },
  item:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
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