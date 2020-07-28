import React, { Component } from "react";

export default (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {};
      this.option = {};
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };

    getFieldsValue = () => {
      return this.state;
    };

    // 表单校验方法
    validateFields = (callback) => {
      let err = [];
      console.log(this.option, 12);
      for (let key in this.option) {
        // 从option中取rules规则，根据规则进行校验
        const { rules } = this.option[key];
        rules.forEach((item) => {
          if (item.required) {
            if (!item.pattern.test(this.state[key])) {
              err.push({
                [key]: item.message,
              });
            }
          }
        });
      }
      if (err.length === 0) {
        callback(null, this.state);
      } else {
        callback(err, this.state);
      }
    };

    getFieldDecorator = (field, option) => (InputCmp) => {
      this.option[field] = option;
      return React.cloneElement(InputCmp, {
        value: this.state[field] || "",
        name: field,
        onChange: this.handleChange,
      });
    };

    getForm = () => {
      return {
        form: {
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          getFieldDecorator: this.getFieldDecorator,
          validateFields: this.validateFields,
        },
      };
    };
    render() {
      return <WrappedComponent {...this.props} {...this.getForm()} />;
    }
  };
};
