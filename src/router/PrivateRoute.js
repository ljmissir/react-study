import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default connect(({ user }) => ({ isLogin: user.isLogin }))(
  function PrivateRoute({ isLogin, component: Component, ...rest }) {
    console.log(isLogin, 675);
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location.pathname },
              }}
            />
          )
        }
      />
    );
  }
);
