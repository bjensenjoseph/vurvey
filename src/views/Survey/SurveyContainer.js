import { connect } from 'react-redux';
import { updateSurveyData } from './SurveyReducer';
import SurveyView from './SurveyView';

const mapDispatchToProps = {
  updateSurveyData,
};

const mapStateToProps = state => ({
  surveyData: state.survey.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyView);
