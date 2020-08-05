import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createStore, applyMiddleware, combineReducers } from "../k-redux";
import createSagaMiddleware from "redux-saga";
import loginSaga from "../actions/loginSaga";
import reducers from "./reducers";
import isPromise from "is-promise";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// const store = createStore(reducers, applyMiddleware(logger, thunk, promise));
// const store = applyMiddleware(logger, thunk)(createStore)(reducer);

sagaMiddleware.run(loginSaga);

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
