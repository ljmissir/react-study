import React, { Component } from "react";
import store from "../../store";

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

  addProduct = () => {
    const product = {
      productName: "apple",
      price: parseInt(Math.random() * 9999),
      id: parseInt(Math.random() * 9999999999999),
    };
    store.dispatch({ type: "ADDPRODUCT", product });
  };

  deleteProduct = (product) => {
    store.dispatch({ type: "DELETEPRODUCT", product });
  };

  render() {
    const { products } = store.getState();
    console.log(products, 99);
    return (
      <div>
        {/* <p>{store.getState()}</p> */}
        <p>{store.getState().count}</p>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div key={product.id} style={{ padding: "15px 0" }}>
                <span>{product.productName}</span>
                <span style={{ padding: "0 20px" }}>￥{product.price}</span>
                <button
                  onClick={() => {
                    this.deleteProduct(product);
                  }}
                >
                  删除
                </button>
              </div>
            );
          })}
        <button onClick={this.addCount}>increase</button>
        <button onClick={this.decreaseCount}>decrease</button>
        <button onClick={this.asyncAddCount}>async increase</button>
        <button onClick={this.promiseAddCount}>promise increase</button>
        <button
          onClick={() => {
            this.addProduct();
          }}
        >
          添加商品
        </button>
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
