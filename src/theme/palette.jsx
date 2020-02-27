import * as colors from './colours';

const {
  coreGrey,
  corePurple,
  coreRed,
  coreTeal,
  coreWhite,
} = colors;

export default {
  palette: {
    background: {
      default: coreWhite,
    },
    primary: {
      main: coreRed,
      '&$disabled': {
        color: corePurple,
      },
    },
    secondary: {
      main: coreTeal,
    },
    text: {
      primary: coreGrey,
    },
    error: {
      main: coreRed,
    },
    colors,
  },
};