import { createAction, createReducer } from 'redux-act';
import axios from 'axios';

// ------------------------------------
// Actions
// ------------------------------------
export const configRetrieved = createAction('CONFIG_RETRIEVED');

export const retrieveConfig = () =>
  dispatch =>
    axios({
      method: 'GET',
      url: '/config/app-config.json',
    }).then(res => dispatch(configRetrieved(res.data)))
      .catch(() => {
        throw Error('Error retrieving config');
      });

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {},
};

export default createReducer({
  [configRetrieved]: (state, payload) => ({
    ...state,
    data: payload,
  }),
}, initialState);
