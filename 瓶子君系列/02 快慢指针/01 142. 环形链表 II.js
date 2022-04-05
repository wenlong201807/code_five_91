

var detectCycle = function (head) {
  const emptyNode = new ListNode();
  emptyNode.next = head;

  if (!head) return null;
  let slow = (fast = emptyNode);
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // 相交了，证明相交了
      let next = emptyNode;
      while (next !== slow) {
        next = next.next;
        slow = slow.next;
      }
      // 相交的时候，就是环入口
      return slow;
    }
  }
  return null;
};
