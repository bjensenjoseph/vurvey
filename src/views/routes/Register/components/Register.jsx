import React from 'react';
import PropTypes from 'prop-types';
// import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { Formik, Field, Form } from 'formik';

import { email, minLength2, minLength6 } from 'store/validations';

export default class RegisterView extends React.Component {
  static propTypes = {
    clearError: PropTypes.func,
    error: PropTypes.string,
    handleSubmit: PropTypes.func,
    register: PropTypes.func.isRequired,
    registerError: PropTypes.string,
    logout: PropTypes.func,
    pristine: PropTypes.bool,
    router: PropTypes.object,
    submitting: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pristine && this.props.registerError !== null) {
      this.props.clearError('registerError');
    }
  }

  onSubmit(values) {
    this.props.register(values)
      .then(() => this.props.router.push('/dashboard'))
      .catch(err => err);
  }

  render() {
    const {
      error, handleSubmit, registerError, submitting,
    } = this.props;
    return (
      <Card
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          padding: '35px 30px',
          transform: 'translate(-50%, -50%)',
          background: 'rgb(250, 250, 250)',
        }}
        elevation={Elevation.THREE}
      >
        <div style={{ fontSize: '26px' }}> Join Us :) </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div style={{ margin: '10px 0' }}>
            <Field
              name="username"
              type="text"
            />
          </div>
          <div style={{ margin: '10px 0' }}>
            <Field
              name="email"
              type="text"
            />
          </div>
          <div style={{ margin: '10px 0' }}>
            <Field
              name="password"
              type="password"
            />
          </div>
          <div style={{ margin: '10px 0' }}>
            <Field
              name="confirm_password"
              type="password"
            />
          </div>
          <div style={{ paddingTop: '45px' }}>
            <Button type="submit" disabled={submitting}>Sign Up</Button>
          </div>
        </form>
      </Card>
    );
  }
}
