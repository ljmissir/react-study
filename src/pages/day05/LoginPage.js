import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/user";

export default connect(
  ({ user }) => ({
    isLogin: user.isLogin,
    loading: user.loading,
    err: user.err,
  }),
  {
    login,
  }
)(
  class LoginPage extends Component {
    constructor(props) {
      super(props);

      this.state = {
        username: "",
        password: "",
      };
    }

    nameChange = (e) => {
      this.setState({ username: e.target.value });
    };

    passwordChange = (e) => {
      this.setState({ password: e.target.value });
    };

    render() {
      const { isLogin, loading, location, login, err } = this.props;
      const { username, password } = this.state;
      if (isLogin) {
        const { from = "/" } = location.state || {};
        return <Redirect to={from} />;
      }
      return (
        <div>
          <Input
            size="large"
            placeholder="输入用户名"
            onChange={this.nameChange}
            value={username}
          />
          <Input
            size="large"
            style={{ margin: "20px 0" }}
            type="password"
            placeholder="输入密码"
            onChange={this.passwordChange}
            value={password}
          />
          <p className="red">{err.msg}</p>
          <Button
            loading={loading}
            style={{ width: "100%" }}
            type="primary"
            size="large"
            onClick={() => {
              login({ username, password });
            }}
          >
            {loading ? "loading..." : "登录"}
          </Button>
        </div>
      );
    }
  }
);
