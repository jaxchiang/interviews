Function.prototype.Apply = function (thisArg, args = Symbol.for("args")) {
  //Apply 函数总是被我们想改变this的函数调用，因此本函数内this总是指代调用函数

  //生成一个Symbol类型的唯一符号，用于将调用apply的函数挂载到指定对象上
  const fn = Symbol("fn");
  thisArg[fn] = this;

  //通过对象调用函数，并传参
  args === Symbol.for("args") ? thisArg[fn]() : thisArg[fn](...args);

  //删除挂载到指定对象上的方法
  delete thisArg[fn];
};
