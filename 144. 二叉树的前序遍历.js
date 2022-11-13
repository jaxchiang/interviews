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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const res = [];

  const innerTraversal = (root) => {
    if (root === null) return;
    res.push(root.val);

    innerTraversal(root.left);
    innerTraversal(root.right);
  };

  innerTraversal(root);

  return res;
};
