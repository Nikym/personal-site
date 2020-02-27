import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './src/theme/index';
import Layout from './src/components/Layout/Layout';

const Wrapper = ({element}) => (
  <ThemeProvider theme={theme}>
    <Layout>
      {element}
    </Layout>
  </ThemeProvider>
);

export default Wrapper;