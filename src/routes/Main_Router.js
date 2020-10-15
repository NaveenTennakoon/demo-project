import React from "react";
import Login from "../views/Login_Page";
import Home from "../views/Home_Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./Protected_Router";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/home">
          <Home />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="home" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainRouter;