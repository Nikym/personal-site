export default (theme) => ({
  ...theme,
  typography: {
    ...theme.typography,
    h1: {
      fontFamily: 'Fredoka One',
      fontStyle: 'normal',
      letterSpacing: '1.5px',
      fontSize: '40px',
    },
    h2: {
      fontFamily: 'Open Sans',
      fontSize: '30px',
    },
    h3: {
      fontFamily: 'Open Sans',
      fontSize: '24px',
    },
    h4: {
      fontFamily: 'Open Sans',
      fontSize: '20px',
    },
    body1: {
      fontFamily: 'Open Sans',
      fontSize: '16px',
    },
    body2: {
      fontFamily: 'Open Sans',
      fontSize: '14px',
    },
  }
});