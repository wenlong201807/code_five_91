
/**
 * 通过 https://leetcode-cn.com/problems/reverse-linked-list-ii/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  let ret = new ListNode(-1, head), pre = ret, cnt = right - left + 1;
  while (--left) {
    pre = pre.next;
  }
  pre.next = reverse(pre.next, cnt);
  return ret.next;
};

var reverse = function (head, n) {
  let pre = null, cur = head;
  while (n--) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  head.next = cur;
  return pre;
}