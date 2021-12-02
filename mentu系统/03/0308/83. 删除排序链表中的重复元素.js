/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/submissions/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let pre = head, cur = head.next;
  while (cur) {
    if (pre.val != cur.val) {
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    } else {
      cur = cur.next;
    }
  }
  pre.next = null;
  return head;
};