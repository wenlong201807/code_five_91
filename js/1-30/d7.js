/**
 * 题目 https://leetcode-cn.com/problems/rotate-list/
 * 参考 https://leetcode-cn.com/problems/rotate-list/solution/xuan-zhuan-lian-biao-li-yong-huan-lian-b-0dpz/
 * 
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
  // k为0时不需要移动，链表为空或者链表只有一个节点直接返回链表
  if (k === 0 || !head || !head.next) return head;
  // 【第一步】建立锚节点，记录链表的头结点
  var dummy = new ListNode(0, head), cur = dummy;

  // 【第二步】计算出链表的长度
  let count = 0;
  // 循环执行完之后，cur指向了链表的最后一个位置
  while (cur.next) {
      cur = cur.next;
      count++;
  }
  // 如果链表的长度等于要移动的次数，直接返回链表
  if (k === count) {
      return head;
  } else if (k > count) {
      // 如果链表的长度小于要移动的位置数，直接对链表长度取模运算，
      // 因为如果链表的长度小于需要要移动的次数，意味着我们的环形链表至少需要循环一周以上
      k %= count;
  }

  // 将链表的最后一个位置，指向链表的第一个位置，形成一个环链表
  cur.next = dummy.next;
  // 将cur指向原链表的第一个位置
  cur = cur.next;

  // 【第三步】开始移动链表
  for (let i = 0; i < count - k - 1; i++) {
      cur = cur.next;
  }

  // 【第四步】移动完成，切断环形列表
  // 执行为for循环到这里之后，已经到了我们要切断链表的位置，但是在切断链表之前，
  // 将我们的锚点指向要切断链表的下一个位置，将其作为新链表的头结点
  dummy.next = cur.next;
  // 切断结点，这里一定不要忘记，否则就还是换链表
  cur.next = null;
  return dummy.next
};
