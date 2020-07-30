import { compose, curry } from "../utils";

// !实现applyMiddleware()中间件
export default function applyMiddleware(...middlewares) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const middlewareChain = middlewares.map((middleware) => middleware(midApi));

    // !加强dispatch
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
}
