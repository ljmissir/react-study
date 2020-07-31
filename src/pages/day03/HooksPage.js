import React, { useReducer, useEffect } from "react";
import countReducer from "../../store/count";
import productReducer from "../../store/products";

export default function HooksPage() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [productList, dispatchProduct] = useReducer(productReducer, []);
  const product = {
    productName: "apple",
    price: Math.floor(Math.random() * 9999),
    id: Math.floor(Math.random() * 9999999999),
  };

  useEffect(() => {
    console.log(count, productList);
  }, [count, productList]);

  return (
    <div>
      <p>{count}</p>
      {productList.length > 0 &&
        productList.map((product) => {
          return (
            <div key={product.id} style={{ padding: "15px 0" }}>
              <span>{product.productName}</span>
              <span style={{ padding: "0 20px" }}>￥{product.price}</span>
              <button
                onClick={() => {
                  dispatchProduct({ type: "DELETEPRODUCT", product });
                }}
              >
                删除
              </button>
            </div>
          );
        })}
      <button
        onClick={() => {
          dispatchCount({ type: "INCREASE" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatchProduct({ type: "ADDPRODUCT", product });
        }}
      >
        添加
      </button>
    </div>
  );
}
