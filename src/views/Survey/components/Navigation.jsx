import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@blueprintjs/core';

class Navigation extends React.Component {
  static propTypes = {
    handleNavigation: PropTypes.func.isRequired,
  };

  renderButton(text) {
    return (
      <Button
        className="pt-intent-primary"
        onClick={() => this.props.handleNavigation(text)}
        text={text}
        style={{ margin: '0 1em' }}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderButton('Back')}
        {this.renderButton('Next')}
      </div>
    );
  }
}

export default Navigation;
