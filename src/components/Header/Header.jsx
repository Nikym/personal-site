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
    ...theme.typography.h1,
    color: theme.palette.colors.coreWhite,
    margin: 0,
    margin: '20px 0',
    textShadow: `5px 5px 0px ${theme.palette.colors.coreTeal}, -5px -5px 0px ${theme.palette.colors.coreRed}`,
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
      justifyContent: 'center',
    },
  },
  navItem: {
    padding: '0 22px',
    [theme.breakpoints.up('sm')]: {
      padding: '0 30px',
    },
    margin: '10px 0',
    color: theme.palette.colors.coreGrey,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.colors.coreRed,
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