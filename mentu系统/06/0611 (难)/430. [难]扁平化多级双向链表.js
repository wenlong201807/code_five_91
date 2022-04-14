/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * 通过 https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/submissions/
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head === null) return null;
  let p = head, q, k;
  while (p) {
    k = null;
    if (p.child) {
      k = flatten(p.child);
      p.child = null;
      q = p.next;
      p.next = k;
      k.prev = p;
      // 让p 指针顺着k链表走到最后一位
      while (p.next) {
        p = p.next;
      }
      p.next = q;
      if (q) q.prev = p;
    }
    p = p.next;
  }
  return head;
};