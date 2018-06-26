import React from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup } from '@blueprintjs/core';

class Ethnicity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ethnicity: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    // TODO: have this update key in redux
    const { value } = ev.currentTarget;
    this.setState({ ethnicity: value });
  }

  render() {
    return (
      <RadioGroup
        label="Ethnicity"
        onChange={this.handleChange}
        selectedValue={this.state.ethnicity}
      >
        <Radio label="White" value="1" />
        <Radio label="Black" value="2" />
        <Radio label="Mexican" value="3" />
      </RadioGroup>
    );
  }
}

export default Ethnicity;
