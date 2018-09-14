import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import Age from './Age';
import Ethnicity from './Ethnicity';
import Gender from './Gender';
import { Navigation } from '../components';

export default class Question extends React.Component {
  static propTypes = {
    updateSurveyData: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      questionMap: [
        <Gender />,
        <Age />,
        <Ethnicity />,
      ],
      questionStyle: {
        marginBottom: '3em',
      },
    };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleChange(key, value) {
    // const { value } = ev.currentTarget;
    this.setState({ [key]: value });
    this.props.updateSurveyData({ age: value });
  }

  handleNavigation(direction) {
    const { questionMap, questionNumber } = this.state;
    const end = questionMap.length - 1;
    let nextQuestionNumber = direction === 'Back' ? questionNumber - 1 : questionNumber + 1;
    if (nextQuestionNumber < 0) nextQuestionNumber = 0;
    if (nextQuestionNumber > end) nextQuestionNumber = end;
    this.setState({ questionNumber: nextQuestionNumber });
  }

  renderQuestion() {
    const { questionMap, questionNumber, questionStyle } = this.state;
    // grab question component from state and pass down props
    const QuestionComponent = React.cloneElement(
      questionMap[questionNumber],
      { ...this.props },
    );
    return (
      <div style={questionStyle}>
        <Transition
          in
          timeout={1000}
          unmountOnExit
        >
          {QuestionComponent}
        </Transition>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderQuestion()}
        <div style={{ textAlign: 'center' }}>
          <Navigation handleNavigation={this.handleNavigation} />
        </div>
      </div>
    );
  }
}
