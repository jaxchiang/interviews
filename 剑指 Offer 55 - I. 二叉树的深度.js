/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const depp = (root) => {
    if (!root) return 0;

    return Math.max(depp(root.left) + 1, depp(root.right) + 1);
  };

  return depp(root);
};
