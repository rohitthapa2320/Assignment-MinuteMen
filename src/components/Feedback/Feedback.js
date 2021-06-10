import React from "react";
import Carousel from "react-elastic-carousel";
import { Card , CardContent, makeStyles, Typography, Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card:{
    width: 400,
    height: 220,
  },
  box:{
    textAlign: 'center',
    margin: '32px 0px',
    padding: '16px 0'
  }
}))
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 }
];

const Feedback = () => {
  const items = [{
    name:"Mohit",
    desc:"haussssssssssajccdsnkkkkacnkcdkdssnjxajnjacnsdjcdds"
  },
{
    name:"Shobhit",
    desc:"haussssssssssajccdsnkkkkacnkcdkdssnjxajnjacnsdjcdds"
  },
{
    name:"Ritika",
    desc:"haussssssssssajccdsnkkkkacnkcdkdssnjxajnjacnsdjcdds"
  },
{
    name:"Pooja",
    desc:"haussssssssssajccdsnkkkkacnkcdkdssnjxajnjacnsdjcdds"
  }]
  const classes= useStyles();

  return (
    <div>
      <Box className={classes.box}>
        <Typography variant="h3">Loved By Students</Typography>
      </Box>
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
    </div>
  );
}

export default Feedback;