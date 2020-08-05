import { combineReducers } from "redux";
import count from "./count";
import products from "./products";
import user from "./user";

export default combineReducers({
  count,
  products,
  user,
});
