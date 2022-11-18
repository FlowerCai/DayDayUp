var isSymmetric = function (root) {
  if (root == null) {
    return true
  }
  return judge(root.left, root.right)
}
const judge = function (node1, node2) {
  if (node1 == null && node2 == null) {
    return true
  }
  if (node1 == null || node2 == null) {
    return false
  }

  if (node1.val != node2.val) {
    return false
  }
  return judge(node1.left, node2.right) && judge(node1.right, node2.left)
}
