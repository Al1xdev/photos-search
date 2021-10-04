import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';

const RouteItem = () => {
  return (
    <>
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
    </>
  );
};

export default RouteItem;
