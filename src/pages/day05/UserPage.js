import React, { Component } from "react";
import { connect } from "react-redux";

export default connect(({ user }) => ({ user }))(
  class UserPage extends Component {
    render() {
      console.log(this.props);
      const { user } = this.props;
      const { id, username, score } = user.userInfo;
      return (
        <div>
          <p>id：{id}</p>
          <p>username：{username}</p>
          <p>score：{score}</p>
        </div>
      );
    }
  }
);
