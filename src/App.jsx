import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { retrieveConfig } from './redux/ConfigReducer';
import { About, Header, Home } from './components';
import ExchangeRates from './views/ExchangeRates';
import Survey from './views/Survey/SurveyContainer';

const mapDispatchToProps = {
  retrieveConfig,
};

const mapStateToProps = state => ({
  config: state.config.data,
});

class App extends React.Component {
  // static propTypes = {
  //   config: PropTypes.object.isRequired,
  //   retrieveConfig: PropTypes.func.isRequired,
  // };
  //
  // componentDidMount() {
  //   this.props.retrieveConfig();
  // }

  render() {
    console.log('config', this.props.config);
    // if (Object.keys(this.props.config).length === 0) return null;
    return (
      <div>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/rates" component={ExchangeRates} />
          <Route exact path="/survey" component={Survey} />
        </main>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

// const App = () => (
//   <div>
//     <header>
//       <Link to="/" style={headerStyle}>Home</Link>
//       <Link to="/about-us" style={headerStyle}>About</Link>
//       <Link to="/rates" style={headerStyle}>Rates</Link>
//       <Link to="/survey" style={headerStyle}>Survey</Link>
//     </header>
//
//     <main>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about-us" component={About} />
//       <Route exact path="/rates" component={ExchangeRates} />
//       <Route exact path="/survey" component={Survey} />
//     </main>
//   </div>
// );
//
// export default App;

