import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F5F5F5',
    color: '#3C3C3C',
    padding: '10px',
    borderRadius: '7px',
  },
  teal: {
    boxShadow: '10px 10px 0px 0px #087E8B',
  },
  red: {
    boxShadow: '10px 10px 0px 0px #FF5A5F',
  },
}));

const Panel = ({children, color = 'teal'}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} + ${color == 'teal' ? classes.teal : classes.red}`}>
      {children}
    </div>
  );
};

export default Panel;