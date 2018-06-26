import React from 'react';
import { push } from 'react-router-redux';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
);

Home.propTypes = {
  changePage: propTypes.func,
};

Home.defaultProps = {
  changePage: () => null,
};

const mapDispatchToProps = {
  changePage: () => push('about-us'),
};

export default connect(null, mapDispatchToProps)(Home);
