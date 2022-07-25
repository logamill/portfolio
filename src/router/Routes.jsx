import React from "react";
// import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={HomeDark} />
          <Route path="/home-light" component={HomeLight} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
