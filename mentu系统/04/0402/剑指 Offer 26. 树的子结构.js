/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 * 在a树中寻找b树，如果没找到，就不可能为子树
 * 如果找到了，那么就继续判断a树中找到的节点的左右子树，是否和b树的节点的左右子树是否相同
 * 如何判断是否相同，参照前两步
 */
var isSubStructure = function (A, B) {
  return (!!A && !!B) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

var recur = function (A, B) {
  if (!B) return true;
  if (!A || A.val !== B.val) return false;

  return recur(A.left, B.left) && recur(A.right, B.right);
}