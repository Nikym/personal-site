import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Panel, { PanelBody, PanelHeader } from '../components/Panel/Panel';
import { makeStyles } from '@material-ui/core/styles';

const IndexPage = () => (
  <Grid container spacing={5}>
    <Grid item md={6} xs={12}>
      <Panel panelid="about-panel">
        <PanelHeader>Welcome</PanelHeader>
        <PanelBody bodyid="about-body">
          <Typography variant="body1">
            Hi, I'm Nikita and this is my website! I am a Software Engineer living in the UK,
            however originate from Belarus.
          </Typography>
        </PanelBody>
      </Panel>
    </Grid>
  </Grid>
)

export default IndexPage
