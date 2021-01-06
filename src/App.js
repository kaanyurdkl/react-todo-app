import React from 'react';

import './App.css';

import { TodoProvider } from './TodoContext'; //Context API

import Header from './components/Header';
import Form from './components/Form/';
import TodoList from './components/TodoList';

import CircleTop from './Images/CircleTop.svg';
import CircleRight from './Images/CircleRight.svg';
import CircleMiddle from './Images/CircleMiddle.svg';
import CircleBottom from './Images/CircleBottom.svg';

import Theme from './Theme'; //Material Ui theme
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Styles for material ui components
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      margin: '4rem auto 0 auto 0',
      width: '60%'
    },
    [theme.breakpoints.up('md')]: {
      margin: '4rem auto 0 auto 0',
      width: '45%'
    },
    [theme.breakpoints.up('lg')]: {
      margin: '4rem auto 0 auto 0',
      width: '38%'
    }
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <TodoProvider>
      <Theme>
        <img className="circle circle__top" src={CircleTop} alt="circle"/>
        <img className="circle circle__right" src={CircleRight} alt="circle"/>
        <img className="circle circle__middle" src={CircleMiddle} alt="circle"/>
        <img className="circle circle__bottom" src={CircleBottom} alt="circle"/>
        <Grid container className={classes.root} spacing={5}>
          <Grid container item justify="center" xs={12}>
            <Header />
          </Grid>
          <Grid container item justify="space-between" xs={12}>
            <Form />
          </Grid>
          <Grid container item justify="center" xs={12}>
              <TodoList />
          </Grid>
        </Grid>
      </Theme>
    </TodoProvider>
  );
}

export default App;
