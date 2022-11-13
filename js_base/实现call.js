Function.prototype.Call = function (thisArg, ...args) {
  //这里this为这个方法的调用者
  const fn = Symbol("fn");
  thisArg[fn] = this || window;

  //通过对象调用函数，并传参
  args.length ? thisArg[fn](...args) : thisArg[fn]();

  //删除挂载到指定对象上的方法
  delete thisArg[fn];
};
