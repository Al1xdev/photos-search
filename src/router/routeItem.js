import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

const RouteItem = () => {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </>
  );
};

export default RouteItem;
