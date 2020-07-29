// import { createStore } from "redux";
import { createStore, applyMiddleware } from "../k-redux";
import isPromise from "is-promise";

const reducer = (initialState = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return initialState + 1;
    case "DECREASE":
      return initialState - 1;
    default:
      return initialState;
  }
};

const store = createStore(reducer, applyMiddleware(logger, thunk, promise));
// const store = applyMiddleware(logger, thunk)(createStore)(reducer);

export default store;

function logger({ getState }) {
  return (next) => (action) => {
    console.log("***************************");
    console.log(action.type, "执行了");
    let prevState = getState();
    console.log("prev state", prevState);

    const returnValue = next(action);
    let nextState = getState();
    console.log("next state", nextState);
    console.log("***************************");
    return returnValue;
  };
}

function thunk({ dispatch, getState }) {
  return (next) => (action) => {
    return typeof action === "function"
      ? action(dispatch, getState)
      : next(action);
  };
}

function promise({ dispatch }) {
  return (next) => (action) => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}
