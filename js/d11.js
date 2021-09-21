// 两种循环实现方式
/**
 * 题目
 * 参考 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/142-huan-xing-lian-biao-ii-jian-hua-gong-shi-jia-2/
 * 通过 https://leetcode-cn.com/problems/linked-list-cycle-ii/submissions/
 * @param {ListNode} head
 * @return {ListNode}
 */
// 先判断是否是环形链表
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next && fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (!fast || !fast.next) return null;
  slow = head;
  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head.next,
    fast = head.next.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      slow = head;
      while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
