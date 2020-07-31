import React, { useContext, useEffect, useReducer } from "react";

const Context = React.createContext();

export const connect = (
  mapStateToProps = (state) => state,
  mapDispatchToProps
) => (WrappedComponent) => (props) => {
  // !从Context中取store
  const store = useContext(Context);
  const { getState, dispatch, subscribe } = store;
  const stateProps = mapStateToProps(getState());

  // !mapDispatchToProps有两种类型
  let dispatchProps = { dispatch };
  if (typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(dispatch);
  } else if (typeof mapDispatchToProps === "object") {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }

  // !这里实现了函数组件版本的forceUpdate，可去参考官网
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate();
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store]);

  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />;
};

const bindActionCreator = (creator, dispatch) => {
  return (...args) => dispatch(creator(...args));
};

export function bindActionCreators(creators, dispatch) {
  const obj = {};
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch);
  }
  return obj;
}

export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
