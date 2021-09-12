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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  通过
var mergeTwoLists = function (one, two) {
  let curr = new ListNode(); // 新建一个空链表，用来存储结果链表
  let dummy = curr; // 结果需要返回头指针，而链表操作之后，无法返回头指针，需要保留一个指针

  while (one !== null && two !== null) { // 两个链表都有内容，需要比较
    // console.log(typeof one.val, two.val)
    if (one.val < two.val) {
      curr.next = one // 被赋值给结果链表
      one = one.next // 比较过的，需要将此节点往后移动一格
    } else {
      curr.next = two
      two = two.next
    }
    curr = curr.next; // 重新赋值之后，结果链表也需要移动一格
  }

  if (one !== null) { // 过长的情况
    curr.next = one;
  }
  if (two !== null) {
    curr.next = two;
  }

  console.log('dummy:', dummy.next);
  return dummy.next; // 跳过空节点
};

const one = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
    }
  }
}
const two = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
    }
  }
}

mergeTwoLists(one, two);
// console.log(l2.val)