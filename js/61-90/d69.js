/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 构造函数
function ListNode(x) {
  this.val = x;
  this.next = null;
}
function mergeTwoList(pHead1, pHead2) {
  // 创建一个虚拟头节点 在最后新的链表 生成之后，需要借助这个指针来移动
  let dummy = new ListNode(-1);
  // 将当前的指针赋值给 cur 变量，真正移动的是它
  let cur = dummy;
  // 循环的条件是 两个链表的全部不为空
  // 针对为空的部分在最后单独处理
  while (pHead1 !== null && pHead2 !== null) {
    if (pHead1.val < pHead2.val) {
      cur.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      cur.next = pHead2;
      pHead2 = pHead2.next;
    }
    // 当前移动指针
    cur = cur.next;
  }
  // 处理长度不等的情况，将剩余的部分放在最后
  cur.next = pHead1 || pHead2;
  // 返回新链表的头节点
  return dummy.next;
}
module.exports = {
  mergeTwoList: mergeTwoList,
};

// 作者：chu-peng-fei
// 链接：https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/jsjie-fa-tong-su-yi-dong-leetcode23-he-b-g2j3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
