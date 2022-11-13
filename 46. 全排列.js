/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：
输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：
输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：
输入：nums = [1]
输出：[[1]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const permute = (nums) => {
  if (!nums) return [];
  const res = [];
  // path是组合的数组
  const search = (path) => {
    if (path.length === nums.length) {
      // 长度满足条件，推入res数组
      res.push(path);
      return;
    }

    for (const num of nums) {
      console.log(num);
      if (!path.includes(num)) {
        // 将没出现过的数字，加入path继续找
        search([...path, num]);
      }
    }
  };
  // 从空数组开始
  search([]);
  return res;
};
