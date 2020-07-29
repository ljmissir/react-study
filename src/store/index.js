import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createStore, applyMiddleware, combineReducers } from "../k-redux";
import reducers from "./reducers";
import isPromise from "is-promise";
console.log(reducers, 666);

const countReducer = (initialState = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      return initialState + 1;
    case "DECREASE":
      return initialState - 1;
    default:
      return initialState;
  }
};

const goodsReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADDGOOD":
      return [...initialState, ...action.payload];
    case "DELETEGOOD":
      return [...initialState, ...action.payload];
    default:
      return initialState;
  }
};

// const reducers = combineReducers({ countReducer, goodsReducer });

const store = createStore(reducers, applyMiddleware(logger, thunk, promise));
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
