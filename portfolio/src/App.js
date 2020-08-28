import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// styles
import "assets/css/bootstrap.min.css";
import "assets/demo/demo.css?v=1.2.0";

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        exact path="/"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/experience"
        render={(props) => <Experience {...props} />}
      />
       <Route
        path="/send" 
        render={(props) => <LandingPage {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

export default App