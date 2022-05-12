import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './container';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <App isAuthenticated={isAuthenticated}>
            <Component {...props} />
          </App>
        ) : (
          <Redirect
            to={{
              pathname: '/home/index',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

// Retrieve data from store as props
const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
