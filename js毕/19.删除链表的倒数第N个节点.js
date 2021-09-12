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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  let dummy = new ListNode(); // 头节点的引入
  dummy.next = head;

  let fast = dummy; // 指针变化
  let slow = dummy;

  while(n > 0) {
    fast= fast.next;
    n--;
  }

  while(fast.next !== null) { // fast !== null 也可
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  console.log('dummy:', dummy)

  return dummy.next;
};

const head = {
  val:1,
  next: {
    val:2,
    next: {
      val:3,
      next: {
        val:4,
        next: {
          val:5,
          next: null,
        }
      }
    }
  }
}

console.log(removeNthFromEnd1(head, 2))

const removeNthFromEnd = (head, n) => {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;

  for(let i = 0; i <= n; i++) { //边界取舍
    n2 = n2.next;
  }

  while(n2 !== null) { // 此处有疑惑，
    n2 = n2.next;
    n1 = n1.next;
  }

  n1.next = n1.next.next;  
  return dummy.next;
}
// console.log(removeNthFromEnd(head, 2))