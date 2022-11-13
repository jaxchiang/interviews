/**
 * 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

 

示例 1：

输入：timePoints = ["23:59","00:00"]
输出：1
示例 2：

输入：timePoints = ["00:00","23:59","00:00"]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/minimum-time-difference
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  // 1
  if (timePoints.length > 1440) return 0;
  let min = 1440;
  // 2
  const map = timePoints.map((item) => {
    let a = item.split(":");
    return a[0] * 60 + a[1] * 1;
  });
  // 3
  map.sort((a, b) => a - b);
  // 4
  for (let i = 1; i < map.length; i++) {
    if (map[i] - map[i - 1] < min) {
      min = map[i] - map[i - 1];
    }
  }
  // 5
  return Math.min(min, map[0] + 1440 - map[map.length - 1]);
};
