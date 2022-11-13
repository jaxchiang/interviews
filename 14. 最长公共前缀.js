/**
 *编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 
 * @param {*} strs 
 * @returns 
 */

var longestCommonPrefix = function (strs) {
  const strsLen = strs.length;
  const firstChar = strs[0];
  if (strsLen === 1) return firstChar;

  let result = "";
  let stop = false;

  for (const i in firstChar) {
    const curChar = firstChar[i];
    for (let j = 1; j < strsLen; j++) {
      if (strs[j][i] !== curChar) {
        stop = true;
        break;
      }
      if (j === strsLen - 1 && !stop) result += curChar;
    }
  }

  return result;
};
