/* eslint-disable flowtype/require-valid-file-annotation */

import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createMuiTheme } from 'material-ui/styles';
import { purple, green } from 'material-ui/colors';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  spacing: {
    unit: 5
  },
  typography: {
    fontFamily: 'Quicksand, sans-serif',
  },
  overrides: {
    MuiMobileStepper: {
      dot: {
        width: 6,
        height: 6,
        backgroundColor: 'rgba(255,255,255,0)',
        border: '1px solid #fff'
      },
      dotActive: {
        backgroundColor: '#fff'
      }
    },
    MuiButton: {
      disabled: {
        color: 'rgba(255,255,255,0.3) !important',
      }
    }
  }
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export const sheetsManager = new Map();

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
