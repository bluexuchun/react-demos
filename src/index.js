import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link,Switch,Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple,green } from '@material-ui/core/colors';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Index from './pages/index/index';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  (<MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index}></Route>
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>),
  document.getElementById('root'));
registerServiceWorker();
