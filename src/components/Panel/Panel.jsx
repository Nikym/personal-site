import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: '10px',
    borderRadius: '7px',
  },
  body: {
    padding: '10px',
  },
  header: {
    ...theme.typography.h4,
    padding: '10px',
    paddingBottom: 0,
  },
  teal: {
    boxShadow: `10px 10px 0px 0px ${theme.palette.colors.coreTeal}`,
  },
  red: {
    boxShadow: `10px 10px 0px 0px ${theme.palette.colors.coreRed}`,
  },
}));

const Panel = ({children, color = 'teal', panelid}) => {
  const classes = useStyles();

  return (
    <div id={panelid} className={`${classes.root} + ${color == 'teal' ? classes.teal : classes.red}`}>
      {children}
    </div>
  );
};

export const PanelBody = ({children, bodyid}) => {
  const classes = useStyles();

  return (
    <div id={bodyid} className={classes.body}>
      {children}
    </div>
  )
}

export const PanelHeader = ({children, headerid}) => {
  const classes = useStyles();

  return (
    <div id={headerid} className={classes.header}>
      {children}
    </div>
  )
}

export default Panel;