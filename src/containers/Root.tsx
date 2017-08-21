import * as React from 'react';
import {darkBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import {Hello} from 'components/Hello';

const Root = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
        <AppBar title='My AppBar' />
        <Hello compiler='typescript' framework='react' />
    </div>
  </MuiThemeProvider>
);

export default Root;
