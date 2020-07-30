// !聚合函数
export const compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  // !通过reduce来累积并遍历传入的待执行的方法
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

// !函数柯里化
export const curry = (fn, arr = []) => {
  return fn.length === arr.length
    ? fn(...arr)
    : (...args) => {
        return curry(fn, [...arr, ...args]);
      };
};
