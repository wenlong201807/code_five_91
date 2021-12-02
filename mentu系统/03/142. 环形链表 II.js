/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 通过 https://leetcode-cn.com/problems/linked-list-cycle-ii/submissions/
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) return null;
  let pre = head, cur = head;
  while (cur && cur.next) {
    pre = pre.next;
    cur = cur.next.next;
    if (pre === cur) {
      let temp = head;
      while (pre !== temp) {
        pre = pre.next;
        temp = temp.next;
      }
      return pre;
    }
  }
  return null;
};