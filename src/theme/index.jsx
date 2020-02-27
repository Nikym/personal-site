import { createMuiTheme } from '@material-ui/core/styles';
import fonts from './fonts';
import palette from './palette';

const theme = createMuiTheme({
  ...palette,
  spacing: 4,
  overrides: {},
});

export default fonts(theme);