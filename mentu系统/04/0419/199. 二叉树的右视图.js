/** 题目 https://leetcode-cn.com/problems/binary-tree-right-side-view/
 *  通过 https://leetcode-cn.com/problems/binary-tree-right-side-view/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return []
  let dethMap = new Map() // Map 储存，key 是当前节点的高度，value 是当前节点的值
  let queue = [[root, 0]] // 构造此结构很关键，并且递归执行此操作

  while (queue.length) {
    // 去除队首的元素
    let [{ val, left, right }, depth] = queue.shift()
    // 更新Map里面的每一个key 对应的一个val
    dethMap.set(depth, val)
    depth++
    if (left) {
      queue.push([left, depth])
    }
    if (right) {
      queue.push([right, depth])
    }
  }

  return [...dethMap.values()]
};

// 可以使用广度搜索？？