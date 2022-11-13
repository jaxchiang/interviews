/**
 * 节流函数
 * @param fn 事件触发的操作
 * @param delay 间隔多少毫秒需要触发一次事件
 * @returns {Function}
 */
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (!flag) {
      return;
    }
    const that = this;
    const args = [...arguments];
    flag = false;
    setTimeout(() => {
      fn.apply(that, args);
      flag = true;
    }, delay);
  };
}
