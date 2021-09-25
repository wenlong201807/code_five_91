/**
 * 题目 https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * 参考学习 https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/solution/ykjun-yi-ti-di-liang-ti-zhe-ti-hui-liao-cxflx/
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

const sumNumbers = (root) => {
  const helper = (root, cur) => {
    if (root == null) {
      return 0;
    }
    cur = 10 * cur + root.val;
    if (root.left == null && root.right == null) {
      return cur;
    }
    return helper(root.left, cur) + helper(root.right, cur);
  };
  return helper(root, 0);
};

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/solution/bian-dfsbian-ji-suan-dai-ma-jian-duan-129-qiu-gen-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  // 创建两个队列
  // 用来存储节点
  let nodeQue = [];
  // 用来存储根节点到这个节点的总和
  let valQue = [];

  // 先将根节点入队列
  nodeQue.unshift(root);
  valQue.unshift(root.val);

  while (nodeQue.length > 0) {
    // 将队头元素取出来得到节点root和值temp
    let root = nodeQue.pop();
    let temp = valQue.pop();

    // 如果这个节点是叶子节点（没有左右孩子）
    if (!root.left && !root.right) {
      // 如何符合要求返回true 并 退出函数
      if (temp === targetSum) return true;
      // 不满足要求 下面的都不会满足，就进行下一轮循环了
    }
    // 有左孩子就进来
    if (root.left) {
      // 左孩子进队列
      nodeQue.unshift(root.left);
      // 保存此时路径总和
      valQue.unshift(root.left.val + temp);
    }
    // 有右孩子就进来
    if (root.right) {
      // 右孩子进队列
      nodeQue.unshift(root.right);
      // 保存此时路径总和
      valQue.unshift(root.right.val + temp);
    }
  }
  // 循环走完都没有返回true就说明没有符合要求的路径总和
  return false;
};
