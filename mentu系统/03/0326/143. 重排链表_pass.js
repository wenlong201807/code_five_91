/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverse = function (head) {
  let temp = new ListNode(-1);
  while (head) {
    let next = head.next;
    head.next = temp.next;
    temp.next = head;
    head = next;
  }
  return temp.next;
}
/**
 * 通过 https://leetcode-cn.com/problems/reorder-list/submissions/
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 思路
 * 将原来的链表在中间分割，分为左链表和右链表，然后将右链表翻转，
 * 之后，左链表，右链表一次各取一个，从新拼装出一个新链表
 * 
 * 1 找到链表找到中间节点，前面的是我们的左链表，右边是右链表
 * 2 队我们的righ链表进行反转 reverse函数
 * 3 将左链表的第一个和翻转后的右链表的第一个进行交替进入，最后，重复操作，各取一个值进行交替拼接
 */
var reorderList = function (head) {
  let hair = new ListNode(-1, head);
  let left = hair, right = hair;
  while (right && right.next) {
    right = right.next;
    right = right.next;
    left = left.next;
  }
  right = left.next;
  left.next = null;

  left = head;

  right = reverse(right);
  
  while (left && right) {
    let lNext = left.next;
    let rNext = right.next;
    right.next = left.next;
    left.next = right;
    left = lNext;
    right = rNext;
  }
  
  return hair.next;
};