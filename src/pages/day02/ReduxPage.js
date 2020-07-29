import React, { Component } from "react";
// import createStore from "../../store/k-store";
import store from "../../store";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

export default class ReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  addCount = () => {
    store.dispatch({ type: "INCREASE" });
  };

  asyncAddCount = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "INCREASE" });
      }, 1000);
    });
  };

  decreaseCount = () => {
    store.dispatch({ type: "DECREASE" });
  };

  promiseAddCount = () => {
    store.dispatch(
      Promise.resolve({
        type: "INCREASE",
      })
    );
  };

  render() {
    return (
      <div>
        <p>{store.getState()}</p>
        <button onClick={this.addCount}>increase</button>
        <button onClick={this.decreaseCount}>decrease</button>
        <button onClick={this.asyncAddCount}>async increase</button>
        <button onClick={this.promiseAddCount}>promise increase</button>
      </div>
    );
  }
}

function f1(arg) {
  console.log("f1", arg);
  return arg;
}

function f2(arg) {
  console.log("f2", arg);
  return arg;
}

function f3(arg) {
  console.log("f3", arg);
  return arg;
}

f1(f2(f3("omg")));

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)));
}

const res = compose(f1, f2, f3)("ljmissir");
