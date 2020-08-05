import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "../pages/day05/HomePage";
import UserPage from "../pages/day05/UserPage";
import LoginPage from "../pages/day05/LoginPage";
import _404Page from "../pages/day05/_404Page";
import PrivateRoute from "./PrivateRoute";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ paddingBottom: "20px" }}>
          <Link to="/">首页</Link>
          <Link to="/user" style={{ padding: "0 20px" }}>
            用户中心
          </Link>
          <Link to="/login">登录</Link>
        </div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/user" component={UserPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}
