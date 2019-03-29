import React, { Component } from 'react';
import './App.scss';

import Button from './components/button';

class App extends Component {

  state = {
    theme: 'theme-dark',
    darkTheme: () => {
      this.setState({
        theme: 'theme-dark'
      });
    },
    lightTheme: () => {
      this.setState({
        theme: 'theme-light'
      });
    }
  }

  render() {
    const { theme, darkTheme, lightTheme } = this.state;

    return (
      <div className={`theme-wrapper ${theme} color-scheme-default`}>
        <div className="app">
          <div className="app-content">
            <Button click={darkTheme} title="Dark"></Button>
            <Button click={lightTheme} title="Light"></Button>
            <br/><br/>
            <Button title="Default"></Button>
            <Button theme="primary" title="Primary"></Button>
            <Button theme="secondary" title="Secondary"></Button>
            <Button theme="warning" title="Warning"></Button>
            <br/><br/>
            <Button mode="outlined" title="Default"></Button>
            <Button mode="outlined" theme="primary" title="Primary"></Button>
            <Button mode="outlined" theme="secondary" title="Secondary"></Button>
            <Button mode="outlined" theme="warning" title="Warning"></Button>
            <br/><br/>
            <Button mode="raised" title="Default"></Button>
            <Button mode="raised" theme="primary" title="Primary"></Button>
            <Button mode="raised" theme="secondary" title="Secondary"></Button>
            <Button mode="raised" theme="warning" title="Warning"></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
