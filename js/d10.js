/**
 * 题目 https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * 参考学习：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/160xiang-jiao-lian-biao-shuang-zhi-zhen-ha-xi-biao/
 * 
 * 通过 https://leetcode-cn.com/problems/intersection-of-two-linked-lists/submissions/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA,
      pB = headB;
  while (pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return pA;
};
