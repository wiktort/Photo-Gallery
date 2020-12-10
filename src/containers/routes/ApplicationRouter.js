import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Card from '../Card';
import Image from '../Image';

const appRoutes = {
    Home: {
        id: "HomePage",
        path: "/",
        exact: true,
        component: Card,
    },
    Image: {
        id: "Image",
        path: "/image/:id",
        exact: false,
        component: Image,
    }   
};

function RouteMap ()  {
    const routes = Object.keys(appRoutes).map((key, index) => {
        const route = appRoutes[key];
        return (
          <Route
            key={route.id + index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      });
      return (
        <Switch>
          {routes}
        </Switch>
      )
};
export default RouteMap;


  