/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/add-two-numbers-ii/submissions/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路
 * 用栈，一次压入栈，在出栈的时候进行相加操作
 * 相加的结果先从个位相加，生成的节点，一次追加到结果链表上
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [], stack2 = [];
  let hair = new ListNode(-1);
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let ten = 0;
  while (stack1.length || stack2.length || ten) {
    let num1 = stack1[stack1.length - 1] === undefined ? 0 : stack1.pop();
    let num2 = stack2[stack2.length - 1] === undefined ? 0 : stack2.pop();
    let val = num1 + num2 + ten;
    ten = val / 10 | 0;
    let temp = new ListNode(val % 10, hair.next);
    hair.next = temp;
  }
  return hair.next;
};