import React, { Component } from "react";
import { RouterContext } from "./Context";

export default class Link extends Component {
  static contextType = RouterContext;
  handlePrevent = (e) => {
    e.preventDefault();
    console.log(this.context, 89);
    this.context.history.push(this.props.to);
  };
  render() {
    const { to, children, ...restProps } = this.props;
    return (
      <a href={to} {...restProps} onClick={this.handlePrevent}>
        {children}
      </a>
    );
  }
}
