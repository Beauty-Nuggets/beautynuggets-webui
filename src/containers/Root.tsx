import * as React from 'react';
import {darkBaseTheme, MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

const Root = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

export default Root;
