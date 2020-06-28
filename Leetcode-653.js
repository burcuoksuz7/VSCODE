var findTarget = function(root, k) {
  const values = new Set();
  let found = false;
  function inorder(node) {
    if (!node) {
      return;
    }
    inorder(node.left);
    if (values.has(k - node.val)) {
      found = true;
      return;
    }
    values.add(node.val);
    inorder(node.right);
  }
  inorder(root);
  return found;
};

let root = new TreeNode(1);


findTarget(root, 2);
