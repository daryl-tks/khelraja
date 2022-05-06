import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
// import ErrorRoute from "../commons/404";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />;
          }
          return <PublicRoute key={i} {...route} />;
        })}
        {/* <Route path={`*`} component={ErrorRoute} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
