import React from 'react';
import { Route, Switch } from 'react-router-dom';
/*__IMPORT_MODULE__*/
const allRoutes = [
/*__IMPORT_MODULE_ROUTES__*/
]

const Routes = () => (
  <Switch>
    {
      allRoutes.map(({ component, path, exact }) =>
        <Route
          exact
          path={path}
          component={component}
          key={`route_path_${path}`}
        />
      )
    }
  </Switch>
);

export default Routes;