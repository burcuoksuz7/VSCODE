function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var findTilt = function(root) {
  let tilt = 0;
  function postOrder(root) {
    if (root === null) {
      return 0;
    }
    let left = postOrder(root.left);
    let right = postOrder(root.right);
    tilt += Math.abs(left - right);
    return root.val + left + right;
  }
  postOrder(root);
  return tilt;
};

let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.right.left = new TreeNode(5);

findTilt(node);

