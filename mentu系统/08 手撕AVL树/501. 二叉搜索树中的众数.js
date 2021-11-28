/** 题目 https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
 *  通关 https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/submissions/
 * 
 * 
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
 * 
 * 1. 对于二叉搜索树，其节点的中序遍历为升序，众数是连续出现的
 * 2. 先写一个update函数，用来更新遍历当前节点时的比较基准数base，当前节点出现的次数count
 * 前一个众数的出现次数maxCount ，和用来存放结果节点数的数组res。
 * 3. 再对树进行中序遍历，遍历每一个节点时，执行一次update操作。
 */
var findMode = function (root) {
  //  中序遍历，众数连续出现

  // 所有众数组成的数组
  let res = []
  // 前一个众数的个数
  let maxCount = 0
  // 当前众数的个数
  let count = 0
  // 基准数，即拿来计数的数
  let base = root.val;
  const update = (n) => {
    if (!n) return
    if (n.val === base) {
      count += 1
    } else {
      count = 1
      base = n.val
    }

    if (count === maxCount) {
      res.push(base)
    }

    if (count > maxCount) {
      maxCount = count
      res = [base]
    }
  }

  const inorder = (n) => {
    if (!n) {
      return;
    }

    inorder(n.left)
    update(n)
    inorder(n.right)
  }

  inorder(root)
  return res;
};