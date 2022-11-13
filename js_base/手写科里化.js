/**
 * 
sum(1, 2, 3).valueOf(); //6
sum(2, 3)(2).valueOf(); //7
sum(1)(2)(3)(4).valueOf(); //10
sum(2)(4, 1)(2).valueOf(); //9
sum(1)(2)(3)(4)(5)(6).valueOf(); // 21
 */

function sum(...args) {
  const fn = (...rest) => sum(...args, ...rest);
  fn.valueOf = () => args.reduce((x, y) => x + y, 0);
  return fn;
}

/**
 * 通用版本,对函数实现科里化
 */

const currying = (fn, ...args) => {
  const length = fn.length;
  const prevArgs = [...args];

  function halfFunc(...newArgs) {
    const allArgs = [...prevArgs, ...newArgs];
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
      return halfFunc;
    }
  }

  return halfFunc;
};

// 用法如下：
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2, 3));
