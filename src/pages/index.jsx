import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Panel, { PanelBody, PanelHeader } from '../components/Panel/Panel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    // color: theme.palette.colors.coreGrey,
    color: theme.palette.colors.coreRed,
    textDecoration: 'none',
    // '&:hover': {
    //   color: theme.palette.colors.coreRed,
    // },
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  
  return (
    <Grid container spacing={5}>
      <Grid item md={6} xs={12}>
        <Panel panelid="about-panel">
          <PanelHeader>Welcome</PanelHeader>
          <PanelBody bodyid="about-body">
            <Typography variant="body1">
              Hi, I'm Nikita and this is my website! I am a Software Engineer living in the UK,
              however originate from Belarus.
              <br/><br/>
              Feel free to explore more of the site, where you'll find details of some of my
              past projects (and maybe some current ones).
            </Typography>
          </PanelBody>
        </Panel>
      </Grid>
      <Grid item md={6} xs={12}>
        <Panel panelid="contact-panel" color="red">
          <PanelHeader>Extra Links / Contact</PanelHeader>
          <PanelBody>
            <Typography variant="body1">
              Find me on <a href="https://www.linkedin.com/in/nikmelnikov/" className={classes.link}>LinkedIn</a>{', '} 
              <a href="https://github.com/Nikym" className={classes.link}>Github</a>{', '} 
              <a href="https://gitlab.com/nik_" className={classes.link}>Gitlab</a>
              {', or contact me by email at: '}
              <a href="mailto:me@nikmelnikov.dev" className={classes.link}>
                me@nikmelnikov.dev
              </a>
            </Typography>
            {/* <br/>
            <Typography variant="body1">
              {'Contact me by email: '}
              <a href="mailto:me@nikmelnikov.dev" className={classes.link}>
                me@nikmelnikov.dev
              </a>
            </Typography>
            <br/>
            <Typography variant="body1">
              Check out my <a href="#" className={classes.link}>Github</a> and <a href="#" className={classes.link}>Gitlab</a>.
            </Typography> */}
          </PanelBody>
        </Panel>
      </Grid>
    </Grid>
  )
}

export default IndexPage
