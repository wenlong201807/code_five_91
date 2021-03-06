/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/submissions/
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let ret = new ListNode(-1, head), pre = ret, cur = head;
  while (cur && cur.next) {
    if (pre.next.val != cur.next.val) {
      cur = cur.next;
      pre = pre.next;
    } else {
      while (cur && cur.next && pre.next.val == cur.next.val) {
        cur = cur.next;
      }
      pre.next = cur.next;
      cur = cur.next;
    }
  }
  return ret.next;
};