/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1); // 这样写是防止溢出【x>>1 表示x除以2并取整，缩小一下遍历的范围】
    if (mid * mid <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
