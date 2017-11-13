/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import wrapDisplayName from 'recompose/wrapDisplayName';
import createContext from '../styles/createContext';



// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      height: '100%',
      fontFamily: 'Quicksand, sans-serif',
    },
    body: {
      backgroundColor: '#f2f2f2',
      maxWidth: 414,
      margin: '0 auto',
      position: 'relative'
    },
    div: {
      boxSizing: 'border-box'
    },
    input: {
      '-webkit-appearance': 'none',
      '&:focus': {
        boxShadow: 'none !important',
        borderColor: 'rgba(255,255,255,0) !important',
      }
    },
    ':focus': {
      outline: 'none'
    }
  },
});

let AppWrapper = props => props.children;

AppWrapper = withStyles(styles)(AppWrapper);

const context = createContext();

function withRoot(BaseComponent) {
  class WithRoot extends Component {
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
          <JssProvider SheetsRegistry={context.sheetsRegistry} Jss={context.jss}>
            <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
              <AppWrapper>
                <BaseComponent />
              </AppWrapper>
            </MuiThemeProvider>
          </JssProvider>
      );
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRoot.displayName = wrapDisplayName(BaseComponent, 'withRoot');
  }

  return WithRoot;
}

export default withRoot;