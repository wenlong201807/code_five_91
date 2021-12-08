/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * 思路
 * 1 生命两个链表，small 小于x的值  large 存储大于等于x的值
 * 2 遍历整个链表，拿出来，每一个节点都要和x进行比较。小于的放在small，大于的放在large
 * 3 将small 链表的尾指针指向 large链表的头指针
 * 4 最后返回small
 */
var partition = function (head, x) {

};