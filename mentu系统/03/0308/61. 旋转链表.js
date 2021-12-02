/**
 * 通过 https://leetcode-cn.com/problems/rotate-list/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 判断这个节点是不是空的
  if (!head) return null;
  // 找到链表的尾节点，穿成环
  let cur = head, size = 1;
  while (cur.next) cur = cur.next, size += 1;
  cur.next = head;
  // 获取到链表的长度，找到第size-k个节点，然后将它断开
  for (let i = 0; i < size - k % size - 1; i++) { // k 大于环形的数量时，需要取模
    head = head.next;
  }
  cur = head.next;// 
  head.next = null;
  return cur;
};