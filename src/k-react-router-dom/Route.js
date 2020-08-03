import React, { Component } from "react";
import { RouterContext } from "./Context";
import matchPath from "./matchPath";

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
          // const match = window.location.pathname === path;
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match;
          const props = { ...context, match };
          // return match ? React.createElement(component, props) : null;
          return (
            <RouterContext.Provider value={props}>
              {/* {match ? React.createElement(component, props) : null} */}
              {match
                ? children
                  ? typeof children === "function"
                    ? children(props)
                    : children
                  : component
                  ? React.createElement(component, props)
                  : render
                  ? render(props)
                  : null
                : typeof children === "function"
                ? children(props)
                : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}

export default Route;
