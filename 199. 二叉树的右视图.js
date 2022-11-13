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
var rightSideView = function (root) {
  if (!root) return [];

  const result = [];
  const childs = [root];

  while (childs.length) {
    const childLenght = childs.length;
    for (let i = 0; i < childLenght; i++) {
      const currentNode = childs.shift();
      if (i === childLenght - 1) result.push(currentNode.val);
      if (currentNode.left) childs.push(currentNode.left);
      if (currentNode.right) childs.push(currentNode.right);
    }
  }

  return result;
};
