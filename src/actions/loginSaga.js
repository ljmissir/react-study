import { put, call, take, fork, takeEvery } from "redux-saga/effects";
import * as LoginService from "../api";

function* loginHandle(action) {
  yield put({ type: "REQUEST" });
  try {
    // 第一个异步请求
    const res1 = yield call(LoginService.login, action.payload);
    // 同步的方式 调用第二个请求，这个请求依懒于第一个请求的返回值
    const res2 = yield call(LoginService.getMoreUserInfo, res1);
    // 同步的方式 触发状态更新
    yield put({
      type: "LOGIN_SUCCESS",
      payload: { ...res2 },
    });
  } catch (err) {
    yield put({
      type: "LOGIN_FAILURE",
      payload: err,
    });
  }
}

function* loginSaga() {
  yield takeEvery("LOGIN_SAGA", loginHandle);
}

export default loginSaga;
