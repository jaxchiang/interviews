/**
 *
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */
const instanceOf2 = (obj, func) => {
  // 必须是对象或者函数
  if (!(obj && ["object", "function"].includes(typeof obj))) {
    return false;
  }

  let proto = obj;

  while ((proto = Object.getPrototypeOf(proto))) {
    if (proto === func.prototype) {
      return true;
    }
  }

  return false;
};
