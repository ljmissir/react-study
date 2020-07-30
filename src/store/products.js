const productsReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ADDPRODUCT":
      return [...initialState, action.product];
    case "DELETEPRODUCT":
      return initialState.filter((product) => product.id !== action.product.id);
    default:
      return initialState;
  }
};
export default productsReducer;
