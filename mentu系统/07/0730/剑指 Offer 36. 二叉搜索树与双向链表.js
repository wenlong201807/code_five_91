/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 * 
 * 二叉排序树的中序遍历最后是 一个从小到大的排序过程。
 * 在中序遍历过程中，记录pre节点位置，pre代表访问当前节点之前，最后一个访问的节点
 * 然后把当前节点街道pre节点的后面，
 * pre时中序遍历过程中，最后一个访问的节点
 * head是整条双向链表的头节点
 */

// 通过 https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/submissions/
var in_order = function (root) {
  if (root === null) return null;
  // 搭建中序遍历过程
  in_order(root.left);
  // 在中序遍历的过程中做操作
  if (pre === null) {
    head = root;
  } else {
    pre.right = root;
  }
  root.left = pre;
  pre = root;
  in_order(root.right);
  return
}
/**
 * @param {Node} root
 * @return {Node}
 * 前序遍历：根左右
 */
var treeToDoublyList = function (root) {
  if (root === null) return null;
  head = pre = null;
  // 中序遍历，得到一条链表，head是链表的头，pre是链表的尾部
  in_order(root);
  // 把链表连接起来，变成循环双端链表
  head.left = pre;
  pre.right = head;
  return head;
};