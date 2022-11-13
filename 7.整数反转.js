/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var reverse = function (x) {
  let res = 0;
  while (x !== 0) {
    let tempNum = x % 10;
    if (res > 214748364 || (res === 214748364 && tempNum > 7)) {
      return 0;
    }
    if (res < -214748364 || (res === -214748364 && tempNum < -8)) {
      return 0;
    }
    res = res * 10 + tempNum;
    x = Math.trunc(x / 10);
  }
  return res;
};
