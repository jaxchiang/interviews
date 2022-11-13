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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const res = [];
  const queen = [[root, 0]];
  let level = 0;

  while (queen.length) {
    const [node, level] = queen.shift();
    if (!res[level]) {
      res[level] = [node.val];
    } else {
      res[level].push(node.val);
    }

    if (node.left) queen.push([node.left, level + 1]);
    if (node.right) queen.push([node.right, level + 1]);
  }

  return res;
};
