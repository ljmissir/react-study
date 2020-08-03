import React, { Component } from "react";
import { RouterContext } from "./Context";

class Router extends Component {
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  constructor(props) {
    super(props);

    this.state = {
      location: props.history.location,
    };

    this.unlisten = props.history.listen((location) => {
      this.setState({ location });
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  render() {
    const { children, history } = this.props;
    const { location } = this.state;
    return (
      <RouterContext.Provider
        value={{
          history,
          location,
          match: Router.computeRootMatch(this.state.location.pathname),
        }}
      >
        {children}
      </RouterContext.Provider>
    );
  }
}

export default Router;
