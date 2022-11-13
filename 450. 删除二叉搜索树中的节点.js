var deleteNode = function (root, key) {
  if (!root) return null;

  // 说明需要去右子树中删除
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  // 说明需要去左子树种删除
  else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  // 刚好等于要删除的值
  else {
    // 如果是叶子节点
    if (!root.left && !root.right) {
      root = null;
    }

    // 如果有右子树，则用后继节点代替当前的节点，并删除后继节点，并将删除后继节点后的结果，赋值给当前节点的右子树
    else if (root.right) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    }
    // 如果只有左子树，则用当前节点的前驱结点代替当前的节点，并删除前驱结点，并将删除前驱节点后的结果，赋值给当前节点的左子树
    else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }

  return root;
};

// 某个节点的后继节点
function successor(node) {
  node = node.right;
  while (node.left) {
    node = node.left;
  }
  return node.val;
}

// 某个节点的前驱结点
function predecessor(node) {
  node = node.left;
  while (node.right) {
    node = node.right;
  }
  return node.val;
}
