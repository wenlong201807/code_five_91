/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 * 思路：
 * 1 先找到target
 * 2 以target作为根节点，网上找距离为k的节点
 * 3 往下找距离为k的节点
 */

// 未通过
var distanceK1 = function (root, target, k) {
  if (!root) return [];
  let targetNode = null;
  let res = [];
  let paths = [];
  dfs(root, target);
  getdownDis(targetNode, k);
  // 从当前节点向上寻找
  while (targetNode.parent && k > 0) {
    targetNode = targetNode.parent;
    getdownDis(targetNode, --k);
  }

  function dfs (root, target) {
    if (!root || targetNode) return;
    if (root.val === target.val) {
      targetNode = root;
    }
    if (root.left) {
      root.left.parent = root;
      dfs(root.left, target)
    }
    if (root.right) {
      root.right.parent = root;
      dfs(root.right, target)
    }
  }

  function getdownDis (node, k) {
    if (node === null || paths.indexOf(node) !== -1) return;
    paths.push(node);
    if (k > 0) {
      getdownDis(root.left, k - 1);
      getdownDis(root.right, k - 1);
    } else if (k === 0) {
      res.push(node.val);
    }
  }

  return res;
};

/*
目标结点target距离为K的节点，可以是子节点，也可以是父节点
所以遍历方向有三个：左子节点、右子节点、父节点
首先利用map记录所有节点的父节点
再深度优先遍历左子节点、右子节点、父节点

*/
const distanceK = (root, target, k) => {
  // 存放每个节点的父节点的map
  const parents = new Map();
  const res = [];

  const findParents = node => {
    if (node.left) {
      // key：左子节点值
      // value：当前节点
      parents.set(node.left.val, node);
      findParents(node.left);
    }
    if (node.right) {
      // key：左子节点值
      // value：当前节点
      parents.set(node.right.val, node);
      findParents(node.right);
    }
  };
  // 从root出发，深度优先遍历，找到所有节点的父节点
  findParents(root);

  // node：当前节点
  // from：当前节点的来源（父节点或子节点）
  // depth：深度
  // k：题目中的k
  const dfs = (node, from, depth, k) => {
    if (!node) return;
    // 找到了符合条件的节点，放入res
    if (depth === k) {
      res.push(node.val);
      return;
    }
    // 避免向左下递归时，又向上递归
    node.left !== from && dfs(node.left, node, depth + 1, k);
    // 避免向右下递归时，又向上递归
    node.right !== from && dfs(node.right, node, depth + 1, k);
    // 避免向上递归时，又向下递归
    parents.get(node.val) !== from && dfs(parents.get(node.val), node, depth + 1, k);
  };
  // 从target节点处开始递归
  // 三个方向：左子节点、右子节点、父节点
  dfs(target, null, 0, k);

  return res;
};

// 作者：lzxjack
// 链接：https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/solution/guan-fang-ti-jie-zhu-jie-javascript-by-l-0cn2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。