/**
 * 通过 https://leetcode-cn.com/problems/swap-nodes-in-pairs/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 判断head是否为空
  if (!head) return null;
  // 将相邻的两个链表进行反转
  let ret = new ListNode(-1, head), temp = ret;
  while (temp.next && temp.next.next) {
    let pre = temp.next, cur = temp.next.next;
    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;
    temp = pre;
  }
  // 然后返回链表
  return ret.next;
};