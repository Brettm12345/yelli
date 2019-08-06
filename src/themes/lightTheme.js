import {
  darken,
  lighten,
  fade,
} from '@material-ui/core/styles/colorManipulator'

const LightTheme = {
  palette: {
    border: '#dadce0',
    background: {
      default: '#fbfcfd',
      paper: '#ffffff',
    },
    contrastThreshold: 3,
    divider: fade('#202124', 0.1),
    primary: {
      dark: darken('#ff5370', 0.12),
      light: lighten('#ff5370', 0.12),
      main: '#ff5370',
    },
    secondary: {
      dark: lighten('#89ddff', 0.12),
      light: lighten('#89ddff', 0.12),
      main: '#89ddff',
    },
    text: {
      primary: '#161a2a',
      secondary: fade('#161a2a', 0.5),
    },
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      'proxima-nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    h6: {
      fontWeight: 500,
    },
  },
}

export default LightTheme