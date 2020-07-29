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
export default goodsReducer;
