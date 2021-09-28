/**
 * 题目 https://leetcode-cn.com/problems/binode-lcci/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  let head = null; // 链表的头节点
  let pre = null; // 代表前一个节点
  function inorder (node) {
    if (!node)
      return

    const nodeL = node.left;
    const nodeR = node.right;
    node.left = null;
    node.right = null;
    inorder(nodeL)
    // 当前节点是第一个节点，就是链表的头节点
    if (!head) {
      head = node
    }
    // 当前节点不是头节点，就前一个节点指向当前节点
    if (pre) {
      pre.right = node
    }
    pre = node

    inorder(nodeR)
  }
  inorder(root)
  return head
};

// 另一个版本 未通过
function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}
const converBiNode = root => {
  //新建一个节点，作为初始空节点的上一个节点
  let preNode = new TreeNode(0)
  const res = preNode;
  const inorder = root => {
    if (!root) return null;
    inorder(root.left)
    // 将当前根节点的左节点 赋值为null
    root.left = null;
    // 上一个节点的右节点指向当前节点
    preNode.right = root;
    // 更新上一个节点，方便下一步操作
    preNode = root;
    inorder(root.right)
  }

  return res.right;
}
