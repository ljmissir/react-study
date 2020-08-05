const initialState = {
  isLogin: false,
  userInfo: { username: "", id: "", score: 0 },
  loading: false,
  err: { msg: "" },
};

const loginReducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case "REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isLogin: true,
        userInfo: { ...payload },
      };
    case "LOGIN_FAILURE":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loginReducer;
