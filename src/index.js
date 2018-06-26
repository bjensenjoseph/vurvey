import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

const target = document.querySelector('#root');

render(
  <Root />, // eslint-disable-line
  target,
);
