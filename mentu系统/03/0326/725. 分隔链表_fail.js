/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 * 通过 https://leetcode-cn.com/problems/split-linked-list-in-parts/submissions/
 * 
 */
var splitListToParts = function (head, k) {
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }

  let itemLen = Math.floor(len / k);
  let curry = len % k;// 余数，每一个curry项，多一个元素
  let m = 0;// curry 计数
  let result = [];

  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  for (let i = 0; i < k; i++) {
    node = dummyHead;
    let j = 0;
    while (j < itemLen) {
      node = node ? node.next : null;
      j++;
    }

    if (m < curry) {
      node = node ? node.next : null;
      m++;
    }

    result.push(dummyHead.next || null);
    let next = node.next || null;
    
    if (node) node.next = null;
    dummyHead.next = next;
  }
  return result;
};