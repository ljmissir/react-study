import React, { Component } from "react";
import Redirect from "../../k-react-router-dom/Redirect";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Redirect
          to={{
            pathname: "/welcome",
          }}
        />
        HomePage
      </div>
    );
  }
}
