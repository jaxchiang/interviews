/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], left) === i) {
      max = Math.max(max, i - left + 1);
    } else {
      left = s.indexOf(s[i], left) + 1;
    }
  }

  return max;
};
