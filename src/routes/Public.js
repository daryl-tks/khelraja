import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Main from "./container";

const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Main isAuthenticated={false}>
          <Component {...props} />
        </Main>
      )}
    />
  );
};

PublicRoutes.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};

export default PublicRoutes;
