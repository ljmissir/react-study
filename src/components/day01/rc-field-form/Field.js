import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
  static contextType = FieldContext;

  componentDidMount() {
    const { registEnetity } = this.context;
    this.cancelRegister = registEnetity(this);
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister();
    }
  }

  onStoreChange = () => {
    this.forceUpdate();
  };

  getcontroled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldsValue } = this.context;
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const { value } = e.target;
        console.log(value);
        setFieldsValue({ [name]: value });
      },
    };
  };
  render() {
    const { children } = this.props;
    const cloneChildNode = React.cloneElement(children, this.getcontroled());
    return cloneChildNode;
  }
}
