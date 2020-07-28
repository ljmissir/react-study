import React from "react";

// hoc,
// hoc是个函数，参数为一个组件，返回值为一个新的组件
export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};
