import React from 'react';
import { Route, Switch } from 'react-router-dom';
import core from './core';
import bets from './bets';

const MainLayout = core.components.MainLayout
/*__IMPORT_MODULE__*/
const allRoutes = [
	...core.routes,
	...bets.routes,
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