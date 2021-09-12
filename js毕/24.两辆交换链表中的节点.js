/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 通过
var swapPairs = function (head) {
  const dummy = new ListNode(); // 结果要求返回头节点，保留指针
  dummy.next = head; 
  let current = dummy;

  // 快慢两个指针都不能为空
  while (current.next !== null && current.next.next !== null) {
    let n1 = current.next;
    let n2 = current.next.next;
    current.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    current = n1;
  }

  console.log(dummy.next)
  return dummy.next;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      }
    }
  }
}
swapPairs(head)

/*
1. n1 = p.next
2. n2 = p.next.next
3. p.next = n2
4. n1.next = n2.next
5. n2.next = n1
6. p = n1
*/