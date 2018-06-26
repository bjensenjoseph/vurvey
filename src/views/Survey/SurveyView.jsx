import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './questions/QuestionContainer';

class Survey extends React.Component {
  static propTypes = {
    updateSurveyData: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      surveyStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '2em',
        width: '350px',
        boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.2)',
      },
    };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(direction) {
    const { questionMap, questionNumber } = this.state;
    const end = questionMap.length - 1;
    let nextQuestionNumber = direction === 'Back' ? questionNumber - 1 : questionNumber + 1;
    if (nextQuestionNumber < 0) nextQuestionNumber = 0;
    if (nextQuestionNumber > end) nextQuestionNumber = end;
    this.setState({ questionNumber: nextQuestionNumber });
  }

  render() {
    return (
      <div style={this.state.surveyStyle}>
        <Question
          updateSurveyData={this.props.updateSurveyData}
        />
      </div>
    );
  }
}

Survey.propTypes = {
};

Survey.defaultProps = {
};

const mapDispatchToProps = {
};

export default connect(null, mapDispatchToProps)(Survey);
