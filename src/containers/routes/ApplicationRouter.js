import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import Home from '../Home';
import Image from '../Image';
import Section from '../Section';

const appRoutes = {
    Home: {
        id: "HomePage",
        path: "/",
        exact: true,
        component: Home,
    },
    Image: {
        id: "Image",
        path: "/image/:id",
        exact: false,
        component: Image,
    },
    Section: {
        id: "Section",
        path: "/section/:id",
        exact: false,
        component: Section,
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


  