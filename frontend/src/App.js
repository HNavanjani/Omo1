import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    );
  }
}
