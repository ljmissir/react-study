// !enhancer其实就是applyMiddleware，如果存在则执行enhancer(createStore)(reducer)，并传入createStore和reducer
export default function createStore(reducer, enhancer) {
  if (enhancer) {
    // !传入createStore和reducer
    return enhancer(createStore)(reducer);
  }

  let currentState;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    currentListeners.push(listener);
    return () => {
      currentListeners.filter((item) => item === listener);
    };
  }

  dispatch({ type: "REDUX" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
