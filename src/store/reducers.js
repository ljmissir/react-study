import { combineReducers } from "../k-redux/index";
import count from "./count";
import goods from "./goods";

export default combineReducers({
  count,
  goods,
});
