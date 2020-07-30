import React, { Component } from "react";
import { connect } from "react-redux";

@connect(
  // !mapStateToProps
  (state) => {
    return { count: state.count, products: state.products };
  },
  // !mapActionsToProps
  (dispatch) => {
    return { dispatch };
  }
)
class ReactReduxPage extends Component {
  deleteProduct = (dispatch, product) => {
    dispatch({ type: "DELETEPRODUCT", product });
  };

  render() {
    console.log(this.props);
    const { dispatch, count, products } = this.props;
    const product = {
      productName: "apple",
      price: parseInt(Math.random() * 9999),
      id: parseInt(Math.random() * 9999999999999),
    };

    return (
      <div>
        <p>{count}</p>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div key={product.id} style={{ padding: "15px 0" }}>
                <span>{product.productName}</span>
                <span style={{ padding: "0 20px" }}>￥{product.price}</span>
                <button onClick={() => this.deleteProduct(dispatch, product)}>
                  删除
                </button>
              </div>
            );
          })}
        <button onClick={() => dispatch({ type: "INCREASE" })}>increase</button>
        <button onClick={() => dispatch({ type: "ADDPRODUCT", product })}>
          addProduct
        </button>
      </div>
    );
  }
}

export default ReactReduxPage;
