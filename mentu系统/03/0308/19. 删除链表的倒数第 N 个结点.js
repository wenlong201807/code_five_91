/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 通过 https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/submissions/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //head是否为空
  if (!head) return null;
  //创建一个虚头，创建两个指针，一个指向虚头pre，一个指向真是头节点cur
  let ret = new ListNode(-1, head), pre = ret, cur = head;
  //让cur移动k步
  for (let i = 0; i < n; i++) {
    cur = cur.next;
  }
  if (!cur) return head.next;
  //然后让两个指针一起移动，知道cur指向空
  while (cur) cur = cur.next, pre = pre.next;
  // 然后进行删除操作
  pre.next = pre.next.next;
  return ret.next;
};