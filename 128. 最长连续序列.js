/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-consecutive-sequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var longestConsecutive = function (nums) {
  let num_set = new Set();
  for (const num of nums) {
    num_set.add(num);
  }

  let longestStreak = 0;

  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (num_set.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
