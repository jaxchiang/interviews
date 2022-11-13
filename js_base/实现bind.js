Function.prototype.Bind = function (thisArg, ...args) {
  let self = this;
  let fBound = function (...args1) {
    return self.apply(thisArg, [...args, ...args1]);
  };
  return fBound;
};
