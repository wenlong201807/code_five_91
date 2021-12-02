/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 未通过 
 * 参考学习 https://leetcode-cn.com/problems/copy-list-with-random-pointer/solution/fu-zhi-dai-sui-ji-zhi-zhen-de-lian-biao-by-xi-ge-y/
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  // 创建两个指针，一个指向头节点
  let p = head, q;
  // 遍历整个链表，复制每一个节点，并将值全部复制成一样的，然后拼接到源节点的后面
  while (p) {
    q = new NodeList(p.val);
    q.next = p.next;
    q.random = p.random;
    p.next = q;
    p = q.next;
  }
  // 找到一个克隆节点，然后进行修正random，将克隆节点的readom指向克隆节点
  p = head.next;
  while (p) {
    p.random && (p.random = p.random.next);
    // (p = p.next) && (p = p.next); // 等效于下一行
    if (p.next) p = p.next.next;
  }
  // 拆分链表，分成源节点链表和克隆节点链表
  p = q = head.next;
  while (q.next) {
    head.next = head.next.next;
    q.next = q.next.next;
    head = head.next;
    q = q.next;
  }
  head.next = null;
  // 返回克隆节点的链表
  return p;
};