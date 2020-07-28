import React from "react";

export default (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
      this.option = {};
    }

    // 处理Input的change事件
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };

    // 定义getFieldDecorator方法，该方法是个高阶函数，接收一个Input组件，返回一个处理过后的新组建
    getFieldDecorator = (field, option) => (InputComp) => {
      this.option[field] = option;
      return React.cloneElement(InputComp, {
        name: field,
        value: this.state[field] || "",
        onChange: this.handleChange,
      });
    };

    // setFieldValue
    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };

    // getFieldsValue
    getFieldsValue = () => {
      return this.state;
    };

    // validateFields
    validateFields = (callBack) => {
      let err = [];
      for (let field in this.option) {
        const { rules } = this.option[field];
        rules.forEach((item) => {
          if (item.required) {
            if (!item.pattern.test(this.state[field])) {
              err.push({
                [field]: item.message,
              });
            }
          }
        });
      }
      if (err.length === 0) {
        callBack(null, this.state);
      } else {
        callBack(err, this.state);
      }
    };

    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields,
        },
      };
    };

    render() {
      return <WrappedComponent {...this.props} {...this.getForm()} />;
    }
  };
};
