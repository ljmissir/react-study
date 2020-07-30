import React from "react";

// hoc,
// hoc是个函数，参数为一个组件，返回值为一个新的组件
export default (WrappedComponent) => {
  return class extends React.Component {
    submit = () => {};
    getData = () => {
      return {
        username: "ljmissir",
        age: 27,
        submit: this.submit,
      };
    };
    render() {
      return (
        <div className="wrapper">
          <WrappedComponent {...this.getData()} />
        </div>
      );
    }
  };
};
