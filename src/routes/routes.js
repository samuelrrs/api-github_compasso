import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResultsDetails from "../pages/pg-results-details";
import SearchPage from "../pages/pg-search-page";

const routes = [
  {
    path: `/`,
    component: SearchPage,
  },
  {
    path: `/users/:users`,
    component: ResultsDetails,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component: Component }) => {
          return <Route exact path={path} key={path} component={Component} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
