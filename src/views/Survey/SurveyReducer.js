import { createAction, createReducer } from 'redux-act';
import axios from 'axios';

// ------------------------------------
// Actions
// ------------------------------------
export const updateSurveyData = createAction('UPDATE_SURVEY_DATA');

// export const retrieveConfig = () =>
//   dispatch =>
//     axios({
//       method: 'GET',
//       url: '/config/app-config.json',
//     }).then(res => dispatch(configRetrieved(res.data)))
//       .catch(() => {
//         throw Error('Error retrieving config');
//       });

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
    age: '',
    ethnicity: '',
    gender: '',
  },
};

export default createReducer({
  [updateSurveyData]: (state, payload) => ({
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  }),
}, initialState);
