import React, {useState} from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@material-ui/core';
import ExpandIcon from '@material-ui/icons/ExpandMore';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // margin: theme.spacing(4)
  },
   box:{
    textAlign: 'center',
    margin: '32px 0px',
    padding: '16px 0'
  },
  container:{
    margin: 16,
    padding: 4
  },
  text:{
    [theme.breakpoints.down('md')]:{
      fontSize: 16
    }
  }
}));

const Questions = [
  {
    id:"1",
    question: "How can I use Amazon Academy for my JEE Preparation?",
    answer: "Amazon Academy gives you access to expert faculty, who will cover all concepts from basic to advanced level, clear your doubts and guide you on the right path to prepare for, and excel at JEE Main, Advanced & School tests. A well-designed course, study plan, daily practice questions and revision strategy will give you an edge in your JEE preparation."
  },
  {
    id:"2",
    question: "How can I use Amazon Academy for my JEE Preparation?",
    answer: "Amazon Academy gives you access to expert faculty, who will cover all concepts from basic to advanced level, clear your doubts and guide you on the right path to prepare for, and excel at JEE Main, Advanced & School tests. A well-designed course, study plan, daily practice questions and revision strategy will give you an edge in your JEE preparation."
  },
  {
    id:"3",
    question: "How can I use Amazon Academy for my JEE Preparation?",
    answer: "Amazon Academy gives you access to expert faculty, who will cover all concepts from basic to advanced level, clear your doubts and guide you on the right path to prepare for, and excel at JEE Main, Advanced & School tests. A well-designed course, study plan, daily practice questions and revision strategy will give you an edge in your JEE preparation."
  },
  {
    id:"4",
    question: "How can I use Amazon Academy for my JEE Preparation?",
    answer: "Amazon Academy gives you access to expert faculty, who will cover all concepts from basic to advanced level, clear your doubts and guide you on the right path to prepare for, and excel at JEE Main, Advanced & School tests. A well-designed course, study plan, daily practice questions and revision strategy will give you an edge in your JEE preparation."
  },
  {
    id:"5",
    question: "How can I use Amazon Academy for my JEE Preparation?",
    answer: "Amazon Academy gives you access to expert faculty, who will cover all concepts from basic to advanced level, clear your doubts and guide you on the right path to prepare for, and excel at JEE Main, Advanced & School tests. A well-designed course, study plan, daily practice questions and revision strategy will give you an edge in your JEE preparation."
  },
  {
    id:"6",
    question: "How can I use Amazon Academy for my JEE Preparation?",
    answer: "Amazon Academy gives you access to expert faculty, who will cover all concepts from basic to advanced level, clear your doubts and guide you on the right path to prepare for, and excel at JEE Main, Advanced & School tests. A well-designed course, study plan, daily practice questions and revision strategy will give you an edge in your JEE preparation."
  },
]


const FAQ = () => {
  const classes= useStyles();
  const [expand, setExpand]= useState(false);
  const handleChange= (id) => (event, isExpanded) =>{
      setExpand(isExpanded ? id: false)
  }
  return (
    <div className={classes.main}>
      <Box className={classes.box}>
        <Typography variant="h3">Frequently Asked Questions</Typography>
         {Questions.map((item) => {
        return(
          <Box className={classes.container}>
            <Accordion expanded={expand === item.id} onChange={handleChange(item.id)}>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <Typography variant="h6" className={classes.text}>{ item.id}. {item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{item.answer}</Typography>
            </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
      </Box>
         
    </div>
  )
}

export default FAQ;
