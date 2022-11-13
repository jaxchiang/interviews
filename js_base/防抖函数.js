/*
 * 防抖函数
 * @param fn 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer = null; //通过闭包缓存了一个定时器
  return function () {
    const args = [...arguments];
    const that = this;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
