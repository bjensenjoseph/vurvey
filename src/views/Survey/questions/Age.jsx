import React from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup } from '@blueprintjs/core';

class Age extends React.Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <RadioGroup
        label="Age"
        onChange={ev => this.props.handleChange(ev, 'age')}
        selectedValue={this.props.surveyData.age}
      >
        <Radio label="18-25" value="1" />
        <Radio label="26-31" value="2" />
        <Radio label="32-37" value="3" />
      </RadioGroup>
    );
  }
}

export default Age;
