import React from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup } from '@blueprintjs/core';

class Gender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    // TODO: have this update key in redux
    const { value } = ev.currentTarget;
    this.setState({ gender: value });
  }

  render() {
    return (
      <RadioGroup
        label="Gender"
        onChange={this.handleChange}
        selectedValue={this.state.gender}
      >
        <Radio label="Male" value="1" />
        <Radio label="Female" value="2" />
        <Radio label="Prefer not to answer" value="3" />
      </RadioGroup>
    );
  }
}

export default Gender;
