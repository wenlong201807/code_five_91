/**
 * 题目 https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * 通关 https://leetcode-cn.com/problems/find-bottom-left-tree-value/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
  //首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
  let maxPath = 0,resNode = null;
  // 1. 确定递归函数的函数参数
  const dfsTree = function(node,curPath){
  // 2. 确定递归函数终止条件
      if(node.left===null&&node.right===null){
          if(curPath>maxPath){
          maxPath = curPath;
          resNode = node.val;
          }
          // return ;
      }
      node.left&&dfsTree(node.left,curPath+1);
      node.right&&dfsTree(node.right,curPath+1);
  }
  dfsTree(root,1);
  return resNode;
};