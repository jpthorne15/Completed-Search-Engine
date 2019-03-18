import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Episode from "./components/EpisodeSearch";
const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/episode" component={Episode} />
    </Switch>
  );
};

export default routes;
