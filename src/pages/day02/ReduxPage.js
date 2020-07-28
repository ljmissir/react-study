import React, { Component } from "react";
// import createStore from "../../store/k-store";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

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

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
      console.log(store.getState());
    });
  }

  addCount = () => {
    store.dispatch({ type: "INCREASE" });
  };

  asyncAddCount = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "INCREASE" });
        console.log("getState", getState());
      }, 1000);
    });
  };

  decreaseCount = () => {
    store.dispatch({ type: "DECREASE" });
  };

  render() {
    return (
      <div>
        <p>{store.getState()}</p>
        <button onClick={this.addCount}>increase</button>
        <button onClick={this.decreaseCount}>decrease</button>
        <button onClick={this.asyncAddCount}>async increase</button>
      </div>
    );
  }
}
