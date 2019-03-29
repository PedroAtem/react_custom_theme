import React, { Component } from 'react';
import './styles.scss';

class Button extends Component {
  render() {
    let { title, click, theme, mode } = this.props;

    theme = !theme ? 'default' : theme;
    mode = !mode ? 'mode-default' : mode;

    return (
      <button className={`${theme} ${mode}`} onClick={click}>{title}</button>
    )
  }
}

export default Button;