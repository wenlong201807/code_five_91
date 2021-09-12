function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var addTwoNumbers1 = function(l1, l2) {
  const newList = new ListNode();
  let extraNum = 0;
  while (l1.next !== null && l2.next !== null) {
    extraNum = Math.floor((li.val + li.val) / 10);
    const newVal = (li.val + li.val) % 10;
    if (extraNum) {
      newList.val = newVal + 1;
      extraNum = 0;
    } else {
      newList.val = newVal;
    }
  }
};
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let curr = dummy
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = 0;
    
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry; // 每一次计算结果 包含三部分组成，这是进位的部分
    curr.next = new ListNode(sum % 10); // 将新计算的值放入结果链表中
    carry = Math.floor(sum / 10); // 存储当前计算的进位值
    curr = curr.next; // 结果链表往后移动一次
  }

  if (carry > 0) {
    curr.next = new ListNode(carry); // 所有计算完成，可能最高位还存在进位的情况
  }

  return dummy.next; // 返回最后形成的链表
};