import * as React from 'react';
import User from '../users/containers/user';

const classes = require('./App.css');

import logo from '../logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to React</h1>
        </header>
        <User/>  
      
      </div>
    );
  }
}

export default App;
