import React, { Component } from "react";
import { withRouter } from "./../../k-react-router-dom";
import Prompt from "./Prompt";

@withRouter
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirm: true,
    };
  }

  render() {
    const { id } = this.props.match.params;
    console.log(this.props, 121);
    return (
      <div>
        Product：{id}
        <Prompt
          when={this.state.confirm}
          message="Are you sure you want to leave?"
        />
      </div>
    );
  }
}

export default Product;
