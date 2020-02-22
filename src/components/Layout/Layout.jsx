import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header/Header';
import './Layout.css';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    padding: '0 20px',
    color: '#F5F5F5',
    fontFamily: 'Open Sans',
  },
}));

const Layout = ({children}) => {
  const classes = useStyles();

  return (
    <div id="layout" className={classes.root}>
      <Header />
      {children}
    </div>
)};

export default Layout;