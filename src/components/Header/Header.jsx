import React from 'react';
import Panel from '../Panel/Panel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: '40px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  title: {
    fontSize: '40px',
    fontFamily: 'Fredoka One',
    margin: 0,
    letterSpacing: '1.5px',
    margin: '20px 0',
    textShadow: '5px 5px 0px #087E8B, -5px -5px 0px #FF5A5F',
    // textShadow: '-5px -5px 0px #087E8B',
    // color: '#FF5A5F',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    // background: '#F5F5F5',
    // color: '#3C3C3C',
    // boxShadow: '10px 10px 0px 0px #087E8B',
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
      justifyContent: 'center',
      // padding: '0 30px',
    },
  },
  navItem: {
    padding: '0 22px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 30px',
    },
    // borderRight: '0.5px solid #087E8B',
    // '&:last-of-type': {
    //   borderRight: '0px',
    // },
    margin: '10px 0',
    color: '#3C3C3C',
    textDecoration: 'none',
    '&:hover': {
      color: '#FF5A5F',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Nik Melnikov</h1>
      <Panel className={classes.nav}>
        <a href="#" className={classes.navItem}>Who</a>
        <a href="#" className={classes.navItem}>Projects</a>
        <a href="#" className={classes.navItem}>Blog</a>
      </Panel>
    </div>
  )
}

export default Header;