import React from 'react';
import { Route, Switch } from 'react-router-dom';
import core from './core';
import bets from './bets';
import user from './user';
/*__IMPORT_MODULE__*/
const MainLayout = core.components.MainLayout
const allRoutes = [
	...core.routes,
	...bets.routes,
	...user.routes,
/*__IMPORT_MODULE_ROUTES__*/
]

const Routes = () => (
  <Switch>
    <MainLayout>
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
    </MainLayout>
  </Switch>
);

export default Routes;