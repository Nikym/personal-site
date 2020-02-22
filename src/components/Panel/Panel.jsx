import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F5F5F5',
    color: '#3C3C3C',
    boxShadow: '10px 10px 0px 0px #087E8B',
    padding: '10px',
    borderRadius: '7px',
  },
}));

const Panel = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Panel;