/**
 * 题目 https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * 参考 https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/solution/shou-hua-tu-jie-san-chong-jie-fa-jie-zhu-shu-zu-ku/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 const sortedListToBST = (head) => {
  if (head == null) return null;
  let len = 0;
  let h = head;  // h初始指向头结点
  while (head) { // 计算链表节点个数
    len++;
    head = head.next;
  }

  const buildBST = (start, end) => {
    if (start > end) return null;     // 递归出口，返回null节点
    const mid = (start + end) >>> 1;  // 求mid，只是为了分治，不是用它断开链表
    const left = buildBST(start, mid - 1); // 先递归构建左子树

    const root = new TreeNode(h.val);      // 根据 h.val 构建节点
    h = h.next;          // h指针步进              
    root.left = left;    // root接上构建好的左子树        

    root.right = buildBST(mid + 1, end); // 构建当前root的右子树，接上
    return root;
  };

  return buildBST(0, len - 1);
};
