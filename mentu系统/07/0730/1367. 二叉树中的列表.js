/**
 * 通过 https://leetcode-cn.com/problems/linked-list-in-binary-tree/submissions/
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 * 先序遍历 ： 根左右
 */

var judge = function (head, root) {
  if (head === null) return true;
  if (root === null) return false;
  if (root.val !== head.val) return false;
  return judge(head.next, root.left) && judge(head.next, root.right);
};

var isSubPath = function (head, root) {
  if (head === null) return true;
  if (root === null) return false;
  if (root.val === head.val && judge(head, root)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};