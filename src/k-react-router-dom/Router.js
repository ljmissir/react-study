import React, { Component } from "react";
import { RouterContext } from "./Context";

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.history.location,
    };

    const unlisten = props.history.listen((location) => {
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
    console.log(this.props);
    return (
      <RouterContext.Provider value={{ history, location }}>
        {children}
      </RouterContext.Provider>
    );
  }
}

export default Router;
