import React, { Component } from "react";
import { RouterContext } from "./Context";

class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = context.location;
          const {
            children,
            component,
            render,
            path,
            computedMatch,
          } = this.props;
          const match = window.location.pathname === path;
          const props = { ...context };
          return match ? React.createElement(component, props) : null;
          // return (
          //   <RouterContext.Provider value={props}>
          //     {match ? React.createElement(component, props) : null}
          //   </RouterContext.Provider>
          // );
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Route;
