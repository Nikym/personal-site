import React from "react";
import Grid from '@material-ui/core/Grid';
import Panel from '../components/Panel/Panel';
import { makeStyles } from '@material-ui/core/styles';

const IndexPage = () => (
  <Grid container>
    <Grid item md={6} xs={12}>
      <Panel>
        <p>Hi, I'm Nikita (or Nik). I'm a computer science student with a passion for
           programming and the subject as a whole, with interests in online technologies
           and web development.
          <br/><br/>
          I'm always looking for a challenge to help me build on and practice my skills,
           and enjoy working on projects from time to time. If you're interested in
            having me help work on your project(s), don't hesitate to contact me and
            I'm sure we can work something out!</p>
      </Panel>
    </Grid>
  </Grid>
)

export default IndexPage
