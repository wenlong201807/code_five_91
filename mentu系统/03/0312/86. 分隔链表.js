/**
 * 通过 https://leetcode-cn.com/problems/partition-list/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null;
  // 创建两个链表，一个链表存储比x小的元素，一个链表存储比x大的元素
  let big = new ListNode(), small = new ListNode();
  // 为两个链表定义两个指针
  let bigNode = big, smallNode = small;
  // while (cur) {
  //   next = cur.next;
  //   cur.next = null;
  //   if (cur.val < x) {
  //     smallNode.next = cur;
  //     smallNode = cur;
  //   } else {
  //     bigNode.next = cur;
  //     bigNode = cur;
  //   }

  //   // 循环条件
  //   cur = next
  // }
  // 与上面的while 等效
  // 定义原链表的头指针，然后进行比较，链接到对应的链表，然后进行移动
  for (let cur = head, next; cur; cur = next) {
    next = cur.next;
    cur.next = null;
    if (cur.val < x) {
      smallNode.next = cur;
      smallNode = cur;
    } else {
      bigNode.next = cur;
      bigNode = cur;
    }
  }

  // 将两个链表拼接在一起
  smallNode.next = big.next;
  return small.next;
};