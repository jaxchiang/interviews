/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  if (height.length < 2) return max;

  let left = 0;
  let right = height.length - 1;

  while (left !== right) {
    const currentArea = Math.min(height[right], height[left]) * (right - left);
    max = Math.max(currentArea, max);
    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};
