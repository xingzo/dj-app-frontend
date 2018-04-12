import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";


export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
      <Route path="/profile" exact component={Profile} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
