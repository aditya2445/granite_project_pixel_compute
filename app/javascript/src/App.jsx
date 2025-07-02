import React from "react";

import { CreateTask, ShowTask, EditTask } from "components/Tasks";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Dashboard from "./components/Dashboard";

const App = () => (
  <Router>
    <ToastContainer />
    <Switch>
      <Route exact path="/" render={() => <div>Home</div>} />
      <Route exact component={Dashboard} path="/dashboard" />
      <Route exact component={CreateTask} path="/tasks/create" />
      <Route exact component={ShowTask} path="/tasks/:slug/show" />
      <Route exact component={EditTask} path="/tasks/:slug/edit" />
    </Switch>
  </Router>
);

export default App;
