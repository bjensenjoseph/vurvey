import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import configReducer from './ConfigReducer';
import surveyReducer from '../views/Survey/SurveyReducer';

export default combineReducers({
  config: configReducer,
  routing: routerReducer,
  survey: surveyReducer,
});
