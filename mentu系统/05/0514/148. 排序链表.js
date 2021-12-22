/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/sort-list/submissions/
 * 00：57：40
 * @param {ListNode} head
 * @return {ListNode}
 * 先把当前的链表分成两部分，对两个部分分别进行排序，对两个有序的链表合并排序，最后返回
 */
var merge = function (head1, head2) {
  const dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = head1, temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;// 跳下一步
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else {
    temp.next = temp2;
  }
  return dummyHead.next;
}

var toSortList = function (head, tail) {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow = head, fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(toSortList(head, mid), toSortList(mid, tail));
}

var sortList = function (head) {
  return toSortList(head, null);
};