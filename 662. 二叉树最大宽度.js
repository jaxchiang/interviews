/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let res = 0;
  if (!root) return res;

  // node level idx;
  let queue = [[root, 1, 1]];
  let can = Math.pow(2, 32) - 1;
  let obj = {
    level: 0,
    start: 0,
    end: 0,
  };
  while (queue.length) {
    let [node, level, idx] = queue.shift();
    if (obj.level == level) {
      obj.end = idx;
    } else {
      // 换新层了
      res = Math.max(res, obj.end - obj.start + 1);
      obj.level = level;
      obj.start = idx;
      obj.end = 0;
    }
    // 取余can是为了解决大数问题 超出后算不出来了
    if (node.left) {
      queue.push([node.left, level + 1, (idx * 2) % can]);
    }
    if (node.right) {
      queue.push([node.right, level + 1, (idx * 2 + 1) % can]);
    }
  }
  // 退出循环时 还剩最后一层没有计算 相关信息存在obj里面
  res = Math.max(res, obj.end - obj.start + 1);
  return res;
};
