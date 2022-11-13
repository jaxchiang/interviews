/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length === 0) return false;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainNum = target - currentNum;
    if (nums.indexOf(remainNum) !== -1 && nums.indexOf(remainNum) !== i) {
      return [i, nums.indexOf(remainNum)];
    }
  }
};
