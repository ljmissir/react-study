export const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "ljmissir" && password === "ljm@074395") {
        resolve({ id: 1195108449, username: "廖坚明" });
      } else {
        reject({ err: { msg: "用户名或密码错误" } });
      }
    }, 1000);
  });
};

export const getMoreUserInfo = (userInfo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userInfo.id === 1195108449) {
        resolve({ ...userInfo, score: 100 });
      } else {
        reject({ err: { msg: "获取详细信息错误" } });
      }
    }, 1000);
  });
};
